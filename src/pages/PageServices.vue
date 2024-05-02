<template>
  <main>
    <v-parallax class="imgServ" :src="imageAcc" height="400"> <p class="text-h3 sous-titre">Services</p> </v-parallax>

    <v-breadcrumbs :items="items"></v-breadcrumbs>

    <SousTitres title="Services" />

    <v-container>
      <v-col cols="12" class="blocServ" v-for="(service, index) in services" :key="index">
        <v-img :src="service.img" :style="{ borderRadius: '20px' }" class="grey lighten-2"></v-img>
        <v-col md="6" lg="9">
          <h1>{{ service.name }}</h1>

          <p>{{ service.descriptionCourt }}</p>
          <v-btn color="#42A5A1" @click="ouvreDialogue(service)">Voir plus</v-btn>
        </v-col>
      </v-col>

      <v-dialog v-model="dialog" max-width="600px">
        <v-card :style="{ borderRadius: '20px' }">
          <v-card-actions>
            <v-btn color="#42A5A1" text @click="dialog = false">X</v-btn>
          </v-card-actions>
          <SousTitres :title="itemSelectionner.name" />
          <v-img :src="itemSelectionner.img" aspect-ratio="1.4" class="grey lighten-2"></v-img>
          <v-card-text>{{ itemSelectionner.descriptionLong }}</v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </main>
</template>
<script>
import lesServices from "@/data/PageServices.js";
import SousTitres from "@/components/SousTitres.vue";
export default {
  components: {
    SousTitres,
  },
  data() {
    return {
      services: lesServices.services,
      dialog: false,
      itemSelectionner: null,

      /////////////////LES IMAGES/////////////////////
      imageAcc: require("../img/general/sna14.jpeg"),
    };
  },
  items: [
    {
      title: "Accueil",
      desactive: false,
      href: "/",
    },
    {
      title: "Services",
      desactive: true,
    },
  ],
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
.v-btn {
  border-radius: 20px;
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
    padding: auto 60px auto 0;
  }
}
</style>
