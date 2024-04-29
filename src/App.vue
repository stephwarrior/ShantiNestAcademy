<template>
  <head>
    <!--Liens pour fonts et icon-->
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
    />
    <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet" />
    <!--Liens pour fonts principale-->
    <link href="https://fonts.googleapis.com/css?family=Kotta+One:regular" rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </head>
  <SiteEntete @afficheLePanier="afficherPanier = !afficherPanier" :bgColor="headerColor" />
  <PanierAchat v-if="afficherPanier" />
  <router-view />
  <v-btn class="btnRemonte" color="#644a9d" :style="{ borderRadius: '50px' }" @click="scrollTop">
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
  <SitePiedDePage />
</template>

<script>
import SiteEntete from "./components/SiteEntete.vue";
import SitePiedDePage from "./components/SitePiedDePage.vue";
import PanierAchat from "./components/PanierAchat.vue";
//import { useStore } from "vuex";
//import { onMounted } from "vue";

export default {
  name: "App",
  data() {
    return {
      afficherPanier: false,
    };
  },
  components: {
    SiteEntete,
    SitePiedDePage,
    PanierAchat,
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
  computed: {
    headerColor() {
      switch (this.$route.name) {
        default:
          return "#937fbc"; // Default color
      }
    },
  },
};
</script>

<style>
body {
  box-sizing: border-box;
  overflow-x: hidden;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-color: var(--couleurArriereplan);
  color: white;
}
main {
  height: auto;
  padding-top: 3rem;
  color: black;
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
  font-family: "Raleway", sans-serif;
  font-weight: 500;
}
.btnRemonte {
  position: fixed;
  bottom: 30px;
  left: 80%;
  z-index: 2;
}

:root {
  --couleurPrincipale: #937fbc;
  --couleurSecondaire: #42a5a1;
  --couleurTexte: #644a9d;
  --couleurTertiaire: #f5f5f5;
  --couleurQuaternaire: #ec9198;
  --couleurCinquieme: #f0a7a6;
  --couleurSixieme: #f4dad2;
  --couleurSeptieme: #8e7ab5;
  --couleurArriereplan: #faf6ff;
  --fontPrincipaleUn: "Kotta One", sans-serif;
}
</style>
