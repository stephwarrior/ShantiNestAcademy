<template>
  <head>
    <!--Liens pour fonts icon-->
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
    />
    <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet" />
    <!--Liens pour fonts principale-->
    <link href="https://fonts.googleapis.com/css?family=Kotta+One:regular" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo:regular,700,800" rel="stylesheet" />
  </head>
  <SiteEntete />
  <router-view />
  <v-btn class="btnRemonte" color="#e394b5" @click="scrollTop">
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
  <SitePiedDePage />
</template>

<script>
import SiteEntete from "./components/SiteEntete.vue";
import SitePiedDePage from "./components/SitePiedDePage.vue";

export default {
  name: "App",
  components: {
    SiteEntete,
    SitePiedDePage,
  },
  mounted() {
    console.log(this.$vuetify.display.mobile);
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Pour un effet de défilement doux
      });
    },
  },
};
</script>

<style>
body {
  box-sizing: border-box;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: var(--couleurArriereplan);
  color: white;
}
main {
  height: auto;
  color: var(--couleurTexte);
  padding-top: 7rem;
}
.v-container {
  padding: 0;
  margin: 0;
  max-width: none;
}
* {
  text-decoration: none;
  list-style: none;
}
p {
  font-family: "Lato", sans-serif;
}
.btnRemonte {
  position: fixed;
  bottom: 30px;
  left: 80%;
  z-index: 100;
}
:root {
  --couleurPrincipale: #937fbc;
  --couleurTexte: #644a9d;
  --couleurTertiaire: #f5f5f5;
  --couleurQuaternaire: #e394b5;
  --couleurCinquieme: #f0a7a6;
  --couleurSixieme: #f4dad2;
  --couleurSeptieme: #8e7ab5;
  --couleurArriereplan: #faf6ff;
  --fontPrincipaleUn: "Kotta One", sans-serif;
}
</style>
