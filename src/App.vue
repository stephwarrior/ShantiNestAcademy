<template>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Kotta+One:regular" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo:regular,700,800" rel="stylesheet" />
  </head>
  <SiteEntete />
  <router-view />
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
  padding: 5.5rem 2rem;
  height: 300vh; /* Pour tester le pied de page */
  color: var(--couleurTexte);
}
* {
  text-decoration: none;
  list-style: none;
}
:root {
  --couleurPrincipale: #937fbc;
  --couleurTexte: #644a9d;
  --couleurTertiaire: #f5f5f5;
  --couleurArriereplan: #faf6ff;
}
</style>
