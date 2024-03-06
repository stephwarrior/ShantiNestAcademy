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
  height: auto;
  color: var(--couleurTexte);
}
* {
  text-decoration: none;
  list-style: none;
}
p {
  font-family: "Nanum Myeongjo", sans-serif;
}
:root {
  --couleurPrincipale: #937fbc;
  --couleurTexte: #644a9d;
  --couleurTertiaire: #f5f5f5;
  --couleurArriereplan: #faf6ff;
  --fontPrincipaleUn: "Kotta One", sans-serif;
}
</style>
