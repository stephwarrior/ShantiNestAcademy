<template>
  <aside>
    <v-container class="panierAchat">
      <v-row>
        <v-col v-for="(article, index) in articlesPanier" :key="index" cols="12" sm="6" md="4">
          <v-card>
            <v-img :src="article.img" height="200px" contain></v-img>
            <v-card-title>
              <h3>{{ article.nom }}</h3>
            </v-card-title>
            <v-card-text>
              <p>{{ article.prix }}$</p>
              <p>Quantité : {{ article.quantite }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="retireArticle(article.id)">Retirer</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </aside>
</template>
<script>
export default {
  name: "PanierAchat",
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    articlesPanier() {
      return this.$store.getters.articlesPanier;
    },
    nombreArticles() {
      return this.$store.getters.nombreArticles;
    },
  },
  methods: {
    retireArticle(article) {
      this.$store.dispatch("retireDuPanier", article);
    },
  },
};
</script>
<style scoped>
aside {
  height: 100vh;
  width: 60%;
  position: fixed;
  right: 0;
  z-index: 3;
  background-color: var(--couleurTexte);
}
</style>
