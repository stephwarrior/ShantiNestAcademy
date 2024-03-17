<template>
  <main>
    <v-parallax :src="imgTrois">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">Pilates</p>
      </div>
    </v-parallax>
    <v-breadcrumbs :items="items" class="d-none align-center d-md-flex"></v-breadcrumbs>

    <!--------------INTRO Pilates----------------->
    <SousTitres title="Qu'est-ce que le pilates?" />

    <v-window v-model="window" show-arrows="true">
      <v-window-item v-for="(lePilate, index) in descPilates" :key="index"
        ><v-row class="">
          <v-col class="">
            <p>
              {{ lePilate.text }}
            </p>
          </v-col></v-row
        >
      </v-window-item>
    </v-window>

    <!----------------- COURS DE pilates-------------->
    <SousTitres title="Quel cours de pilates choisir ?" />
    <v-row>
      <v-col class="blocPilate" v-for="(pilates, index) in coursPilates" :key="index" cols="12" md="6" lg="4">
        <v-card>
          <v-img :src="pilates.img" :width="auto" cover></v-img>
          <v-card-title>{{ pilates.cours }}</v-card-title>
          <v-card-text>
            {{ pilates.textCourt }}
          </v-card-text>
          <v-card-actions>
            <v-btn @click="dialog = true" text color="pink">En savoir plus</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-----------------Boite modale-------------->
      <v-col>
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title> </v-card-title>
            <v-card-text> </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <!--------------CONSEILS----------------->
    <SousTitres title="Conseils de nos professionnels" />
    <v-row>
      <v-col v-for="(conseil, index) in cslPilates" :key="index" cols="12" md="6">
        <v-alert border="start" border-color="deep-purple accent-4" elevation="4" icon="mdi-check-circle">
          <v-alert-title>{{ conseil.titre }}</v-alert-title>
          <p>{{ conseil.texte }}</p>
        </v-alert>
      </v-col>
    </v-row>

    <!--------------NUTRITIONS----------------->
    <SousTitres title="Nutrition" />
    <v-row>
      <v-col>
        <div class="listCslNutri">
          <ul class="cslNutri fill-height">
            <li><v-icon color="#937fbc" size="sm">mdi-circle</v-icon> {{ conseils.conseilUn }}</li>
            <li><v-icon color="#937fbc" size="sm">mdi-circle</v-icon> {{ conseils.conseilDeux }}</li>
            <li><v-icon color="#937fbc" size="sm">mdi-circle</v-icon> {{ conseils.conseilTrois }}</li>
            <li><v-icon color="#937fbc" size="sm">mdi-circle</v-icon> {{ conseils.conseilQuatre }}</li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </main>
</template>
<script>
import SousTitres from "@/components/SousTitres.vue";
import pilatesData from "@/data/PagePilates.js";
export default {
  data: () => ({
    /////////////////LES IMAGES/////////////////////
    imgUn: require("@/img/PagePilates/pilates01.jpeg"),
    imgDeux: require("@/img/PagePilates/pilates02.jpeg"),
    imgTrois: require("@/img/PagePilates/pilates03.jpeg"),
    imgQuatre: require("@/img/PagePilates/pilates05.jpeg"),
    imgCinq: require("@/img/PagePilates/pilates06.jpeg"),
    imgSix: require("@/img/PagePilates/pilates07.jpeg"),

    /////////////////DATA EXTERNE/////////////////////
    items: pilatesData.items,
    coursPilates: pilatesData.coursPilates,
    descPilates: pilatesData.descPilates,
    cslPilates: pilatesData.cslPilates,

    conseils: {
      conseilUn: "Mangez beaucoup de fruits et légumes pour une alimentation équilibrée.",
      conseilDeux: "Buvez beaucoup d'eau pour rester hydraté.",
      conseilTrois: "Évitez les repas lourds avant une séance de yoga.",
      conseilQuatre: "Évitez les aliments transformés et les sucres ajoutés.",
    },
    /////////////////////ZONE BOOLEAN////////////////////////////
    window: 0,
    dialog: false,
  }),

  components: {
    SousTitres,
  },
};
</script>
<style scoped>
main {
  padding: 0;
  height: auto;
}
.v-row {
  padding: 0 1.5rem;
}
h2 {
  font-family: var(--fontPrincipaleUn);
}
/*////////////LE YOGA CEST QUOI//////////////*/

.v-window-item {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
}

.v-btn {
  background-color: none;
}

/*/ ///////////COURS DE YOGA//////////////*/
.blocYogas {
  margin-bottom: 2rem;
}

/*/ ///////////NUTRITIONS//////////////*/

.listCslNutri {
  height: 300px;
}
.cslNutri {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

/*//////////////////------TABLETTE------////////////////////*/
@media (min-width: 768px) {
  .v-parallax {
    height: 500px;
  }
}
</style>
