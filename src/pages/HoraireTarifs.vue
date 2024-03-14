<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <!--Horaires et tarfis cours de yoga,pilates et meditations-->
    <v-card>
      <v-card-title>Course Schedule</v-card-title>

      <v-data-table :headers="headers" :items="courses" hide-default-footer>
        <v-chip color="primary" dark>the f</v-chip>
        <v-card-text></v-card-text>
        <div>lol</div>
      </v-data-table>
    </v-card>
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
        title: "Horaire et tarifs",
        desactive: true,
      },
    ],
    headers: [
      {
        text: "Cours",
        align: "start",
        sortable: false,
        value: "course",
      },
      { text: "Niveau", value: "level" },
      { text: "Prix", value: "price" },
    ],
    courses: [
      {
        course: "Yoga",
        level: "Débutant",
        price: "$10",
      },
      {
        course: "Pilates",
        level: "Intermédiaire",
        price: "$15",
      },
      {
        course: "Méditation",
        level: "Avancé",
        price: "$20",
      },
    ],
  }),
};
</script>
<style scoped></style>
