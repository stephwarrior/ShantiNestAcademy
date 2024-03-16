<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-container>
      <div class="nbrItems">
        <div>{{ articles.length }} items</div>
      </div>

      <v-row class="test">
        <v-col cols="12" sm="4" v-for="article in articles" :key="article.id">
          <v-card class="blocItems">
            <v-img :src="article.img" alt="pas image">zone image</v-img>
            <p>{{ article.nom }}</p>
            <p>${{ article.prix }}.00 CAD</p>

            <v-btn rounded="lg" elevated @click="ajouterArticle(article)"
              >Ajouter au panier
              <v-badge
                v-if="article.count > 0"
                :content="article.count"
                floating
              ></v-badge></v-btn></v-card></v-col></v-row
    ></v-container>
  </main>
</template>
<script>
import { mapActions } from "vuex";
import { bouteilleBleu, bouteilleRose, bouteilleVerte, bouteilleJaune } from "@/data/imageBoutique.js";

export default {
  name: "PageBoutique",
  data() {
    return {
      articles: [
        {
          nom: "Goblet SNA",
          prix: 50,
          img: "",
          id: 1,
          count: 0,
        },
        { nom: "Chandail SNA", prix: 10, img: bouteilleVerte, id: 2, count: 0 },
        { nom: "Bouteille SNA", prix: 15, img: bouteilleBleu, id: 3, count: 0 },
        { nom: "Tapis SNA", prix: 20, img: bouteilleJaune, id: 4, count: 0 },
        { nom: "Tasse SNA", prix: 10, img: bouteilleRose, id: 5, count: 0 },
        { nom: "Sac SNA", prix: 25, img: "", id: 6, count: 0 },
      ],
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
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
}
.blocItems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-shadow: none;
}
.blocItems > * {
  margin: 0.3rem 0;
}
.blocItems .v-img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 1px solid black;
}
.blocItems .v-btn {
  width: 100%;
  font-size: 0.7rem;
}
.test {
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
  .blocItems {
    padding: 4rem;
  }
}
</style>
