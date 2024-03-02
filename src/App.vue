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
};
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #faf6ff;
  color: white;
}
</style>
