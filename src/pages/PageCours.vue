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
        title: "Cours",
        desactive: true,
      },
    ],
  }),
};
</script>
<style scoped></style>
