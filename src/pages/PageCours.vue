<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-parallax height="500px" src="https://hips.hearstapps.com/hmg-prod/images/10-minute-yoga-1668510425.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">Nos Cours</p>
      </div>

      <div class="iconeFlech">
        <v-btn icon large color="white">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
    </v-parallax>
  </main>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        title: "Accueil",
        desactive: false,
        href: "/",
      },
      {
        title: "Cours",
        desactive: true,
      },
    ],
  }),
};
</script>
<style scoped>
main {
}
</style>
