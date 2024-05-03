<template>
  <main>
    <v-breadcrumbs color="#644a9d" :items="items"></v-breadcrumbs>
    <v-container>
      <!--Pour afficher le nombre d'articles dans la boutique-->
      <div class="nbrItems">
        <h2>{{ lesArticles.length }} Articles</h2>
      </div>
      <!--------------------Les Articles (Boucle)------------------------>
      <v-row class="zoneArticles">
        <v-col class="blocArticles" cols="12" sm="6" md="3" v-for="article in lesArticles" :key="article.id">
          <v-card class="lesArticles">
            <v-img :src="article.img || article.variantes[0].img" alt="pas image">
              <div v-if="article.variantes" class="variantColors">
                <div
                  class="colorSelector"
                  v-for="variant in article.variantes"
                  :key="variant.id"
                  :style="{ backgroundColor: variant.couleur }"
                  @click="updateImg(article, variant)"
                ></div></div
            ></v-img>
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
//////////////////---IMPORTATIONS---/////////////////////
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
  //Permet d'ajouter l'article sélectionné au panier et incrémenter le nombre de fois quil a ete ajoutee
  methods: {
    ...mapActions(["ajouterAuPanier"]),
    ajouterArticle(article) {
      this.ajouterAuPanier(article);
      article.count++;
      console.log(article);
    },
    updateImg(article, variant) {
      article.img = variant.img;
      article.nom = variant.nom;
    },
  },
};
</script>
<style scoped>
.variantColors {
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-end;
}

.colorSelector {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  margin: 5px;
  border: 1px solid #ccc; /* Add border to distinguish light colors */
}
.colorSelector:hover {
  opacity: 0.7;
  scale: 1.05;
}

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

/*//////////////////Les articles////////////////////*/
.zoneArticles {
  display: flex;
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
