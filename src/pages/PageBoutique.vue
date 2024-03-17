<template>
  <main>
    <v-breadcrumbs color="#644a9d" :items="items"></v-breadcrumbs>
    <v-container>
      <!--Pour afficher le nombre d'articles dans la boutique-->
      <div class="nbrItems">
        <h2>{{ lesArticles.length }} items</h2>
      </div>
      <!--------------------Les Articles (Boucle)------------------------>
      <v-row class="zoneArticles">
        <v-col class="blocArticles" cols="12" sm="6" md="4" v-for="article in lesArticles" :key="article.id">
          <v-card class="lesArticles">
            <v-img :src="article.img" alt="pas image"></v-img>
            <h3>{{ article.nom }}</h3>
            <p>${{ article.prix }}.00 CAD</p>

            <v-btn rounded="xl" color="#42A5A1" elevated @click="ajouterArticle(article)"
              >Ajouter au panier
            </v-btn></v-card
          ></v-col
        ></v-row
      ></v-container
    >
  </main>
</template>
<script>
import { mapActions } from "vuex";
import lesArticles from "@/data/PageBoutique.js";

export default {
  name: "PageBoutique",
  data() {
    console.log("erreur", lesArticles);

    return {
      lesArticles: lesArticles.articles,
      items: [
        {
          title: "Accueil",
          desactive: false,
          href: "/",
        },
        {
          title: "Boutique",
          desactive: true,
        },
      ],
    };
  },
  methods: {
    ...mapActions(["ajouterAuPanier"]),
    ajouterArticle(article) {
      this.ajouterAuPanier(article);
      article.count++;
      console.log(article);
    },
  },
};
</script>
<style scoped>
main {
  padding: 4rem 0;
  height: auto;
}
.v-container {
  padding: 0 3rem;
}
.nbrItems {
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
}
.lesArticles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-shadow: none;
}
.lesArticles > * {
  margin: 0.3rem 0;
}
.lesArticles .v-img {
  width: 100%;
  height: 250px;
  background-color: white;
  border-radius: 20px;
}
.lesArticles .v-btn {
  width: 100%;
  font-size: 0.7rem;
}
.zoneArticles {
  display: flex;
  justify-content: space-around;
}

/*//////////////////Tablette////////////////////*/
@media (min-width: 960px) {
  main {
    padding: 7rem 0;
  }
  .v-container {
    padding: 0;
  }

  .lesArticles {
    padding: 2rem;
  }
}
</style>
