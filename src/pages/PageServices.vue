<template>
  <main>
    <v-parallax class="imgServ" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="400">
      <p class="sous-titre text-h3">Services</p>
    </v-parallax>

    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-container>
      <v-col cols="12" class="blocServ" v-for="(service, index) in services" :key="index">
        <v-img :src="service.img" class="grey lighten-2"></v-img>
        <v-col md="6" lg="7">
          <h1>{{ service.name }}</h1>

          <p>{{ service.descriptionCourt }}</p>
          <v-btn color="#644a9d" @click="ouvreDialogue(service)">Voir plus</v-btn>
        </v-col>
      </v-col>

      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>{{ itemSelectionner.name }}</v-card-title>
          <v-img :src="itemSelectionner.img" aspect-ratio="1.4" class="grey lighten-2"></v-img>
          <v-card-text>{{ itemSelectionner.descriptionLong }}</v-card-text>
          <v-card-actions>
            <v-btn color="#644a9d" text @click="dialog = false">Fermer</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </main>
</template>
<script>
import lesServices from "@/data/PageServices.json";
export default {
  data() {
    return {
      services: lesServices.services,
      dialog: false,
      itemSelectionner: null,
    };
  },
  methods: {
    ouvreDialogue(item) {
      this.itemSelectionner = item;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
main {
  height: auto;
}
.imgServ {
  display: flex;
  justify-content: center;
  align-items: center;
}
.blocServ > * {
  margin: 10px 0;
}
@media (min-width: 768px) {
  .blocServ {
    display: flex;
  }
  .blocServ div {
    margin: 10px 0;
  }
}
</style>
