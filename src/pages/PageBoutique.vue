<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-container>
      <div class="nbrItems">
        <div>{{ articles.length }} items</div>
        <div></div>
      </div>

      <v-row class="test">
        <v-col cols="12" md="4" v-for="article in articles" :key="article.id">
          <v-card class="blocItems">
            <v-img :src="article.img" alt="pas image">zone image</v-img>
            <p>{{ article.nom }}</p>
            <p>${{ article.prix }}.00 CAD</p>
            <v-btn @click="ajouterArticle(article)">Ajouter au panier</v-btn>
          </v-card></v-col
        ></v-row
      ></v-container
    >
  </main>
</template>
<script>
import { mapActions } from "vuex";
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
        },
        { nom: "Chandail SNA", prix: 10, img: "", id: 2 },
        { nom: "Bouteille SNA", prix: 15, img: "", id: 3 },
        { nom: "Tapis SNA", prix: 20, img: "", id: 4 },
        { nom: "Tasse SNA", prix: 10, img: "", id: 5 },
        { nom: "Sac SNA", prix: 25, img: "", id: 6 },
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
  padding: 0 7rem;
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
