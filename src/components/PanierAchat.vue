<template>
  <aside>
    <v-row class="zonePanier">
      <!-------------Articles (boucle)-------------->
      <v-col v-for="(article, index) in articlesPanier" :key="index" cols="12">
        <v-card>
          <v-img :src="article.img" height="150px" contain></v-img>
          <v-card-title>
            <h3>{{ article.nom }}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{ article.prix }}$</p>

            <v-card-actions class="d-flex justify-space-around">
              <v-btn color="red" @click="retireArticle(article.id)"><v-icon>mdi-minus</v-icon></v-btn>
              <p>Qts : {{ article.quantite }}</p>
              <v-btn color="green" @click="ajouterArticle(article.id)"><v-icon>mdi-plus</v-icon></v-btn>
            </v-card-actions>

            <p>Total: {{ article.prix * article.quantite }}$</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-col>
      <h1>Subtotal: {{ articlesPanier.reduce((acc, article) => acc + article.prix * article.quantite, 0) }}$</h1>
      <v-btn @click="afficheErreur">Acheter</v-btn>
    </v-col>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title>
          <h2>Oh là là!</h2>
        </v-card-title>
        <v-card-text>
          <p>Ils semblent que votre réseau rencontre des difficultés. Revenez plus-tard.</p>
        </v-card-text>
      </v-card>
    </v-dialog>
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
    ajouterArticle(id) {
      const article = this.articlesPanier.find((article) => article.id === id);
      if (article) {
        article.quantite++;
      }
    },
    retireArticle(article) {
      this.$store.dispatch("retireDuPanier", article);
    },
    afficheErreur() {
      this.dialog = true;
    },
  },
};
</script>
<style scoped>
aside {
  width: 300px;
  height: 100vh;
  padding: 4rem 1rem 0;
  position: fixed;
  right: 0;
  z-index: 3;
  background-color: #8e7ab5;
  text-align: center;
}
.zonePanier {
  overflow-y: scroll;
  height: 80vh;
}
@media (min-width: 960px) {
  .zonePanier {
    padding-top: 2rem;
  }
}
</style>
