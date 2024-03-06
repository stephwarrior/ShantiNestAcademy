<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
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
        title: "Cours de Méditation",
        desactive: true,
      },
    ],
  }),
};
</script>
<style scoped></style>
