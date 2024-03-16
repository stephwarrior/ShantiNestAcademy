<template>
  <main>
    <v-container>
      <v-img
        src="https://images.unsplash.com/photo-1558981001-792f6a3b7f7e"
        aspect-ratio="2.75"
        class="grey lighten-2"
      ></v-img>
      <v-card>
        <v-tabs v-model="tab" bg-color="purple">
          <v-tab value="one">Forfait Étudiant</v-tab>
          <v-tab value="two">Forfait Shanti</v-tab>
          <v-tab value="three">Forfait SantiNest</v-tab>
          <v-tab value="four">Forfait SantiNest Premium</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one"> bunny </v-window-item>
            <v-window-item value="two"> Two </v-window-item>
            <v-window-item value="three"> Three </v-window-item>
            <v-window-item value="four"> Four </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
      <v-data-table :headers="headers" :items="coursFiltres" class="elevation-1"> </v-data-table>
    </v-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      afficherPlusCher: false,
      headers: [
        { text: "Jour", value: "jour" },
        { text: "Heure", value: "heure" },
        { text: "Type", value: "type" },
        { text: "Prix ($)", value: "prix" },
      ],
      cours: [
        { jour: "Lundi", heure: "09:00", type: "Hatha", prix: 20 },
        { jour: "Lundi", heure: "18:00", type: "Vinyasa", prix: 30 },
        { jour: "Mardi", heure: "19:00", type: "Ashtanga", prix: 25 },
        { jour: "Mercredi", heure: "19:00", type: "Ashtanga", prix: 25 },
        { jour: "Vendredi", heure: "18:00", type: "Vinyasa", prix: 30 },
        { jour: "Samedi", heure: "10:00", type: "Hatha", prix: 20 },
        { jour: "Dimanche", heure: "10:00", type: "Hatha", prix: 20 },
        { jour: "Dimanche", heure: "18:00", type: "Vinyasa", prix: 30 },
        { jour: "Dimanche", heure: "18:00", type: "Vinyasa", prix: 30 },
      ],
    };
  },
  computed: {
    coursFiltres() {
      if (!this.afficherPlusCher) return this.cours;
      const prixMax = Math.max(...this.cours.map((c) => c.prix));
      return this.cours.filter((c) => c.prix === prixMax);
    },
  },
};
</script>
