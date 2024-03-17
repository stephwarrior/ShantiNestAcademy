<template>
  <main>
    <v-parallax :src="imgAcc">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">YOGA</p>
      </div>
    </v-parallax>
    <v-breadcrumbs color="#937fbc" :items="items" class="d-none align-center d-md-flex"></v-breadcrumbs>

    <!--------------INTRO YOGA----------------->
    <SousTitres title="Qu'est-ce que le yoga?" />

    <v-window v-model="window" hide-arrows>
      <v-window-item v-for="(leYoga, index) in descYoga" :key="index"
        ><v-row class="">
          <v-col class="">
            <p>
              {{ leYoga.text }}
            </p>
          </v-col></v-row
        >
      </v-window-item>
    </v-window>

    <!----------------- COURS DE YOGA-------------->
    <SousTitres title="Quel cours de Yoga choisir ?" />
    <v-row>
      <v-col class="blocYogas" v-for="(yoga, index) in coursYoga" :key="index" cols="12" md="6" lg="4">
        <v-card height="600px">
          <v-img :src="yoga.img" :width="auto" cover></v-img>
          <v-card-title>{{ yoga.cours }}</v-card-title>
          <v-card-text>
            {{ yoga.textCourt }}
          </v-card-text>
          <v-card-actions>
            <v-btn @click="ouvreDialogue(yoga)" color="#937fbc" variant="outlined">En savoir plus</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title>{{ itemSelectionner.cours }} </v-card-title>
            <v-card-text> {{ itemSelectionner.text }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#937fbc" text @click="dialog = false">Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <!--------------CONSEILS----------------->
    <SousTitres title="Conseils de nos professionnels" />
    <v-row>
      <v-col v-for="(conseil, index) in cslYoga" :key="index" cols="12" md="6">
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
/////////////////---IMPORTATIONS---/////////////////////
import SousTitres from "@/components/SousTitres.vue";
import yogaData from "@/data/PageYoga.js";

export default {
  data: () => ({
    /////////////////LES IMAGES/////////////////////
    imgAcc: require("@/img/general/sna13.jpeg"),
    /////////////////DATA EXTERNE/////////////////////
    items: yogaData.items,
    coursYoga: yogaData.coursYoga,
    descYoga: yogaData.descYoga,
    cslYoga: yogaData.cslYoga,

    conseils: {
      conseilUn: "Mangez beaucoup de fruits et légumes pour une alimentation équilibrée.",
      conseilDeux: "Buvez beaucoup d'eau pour rester hydraté.",
      conseilTrois: "Évitez les repas lourds avant une séance de yoga.",
      conseilQuatre: "Évitez les aliments transformés et les sucres ajoutés.",
    },
    /////////////////////ZONE BOOLEAN////////////////////////////
    window: 0,
    dialog: false,
    itemSelectionner: null,
    //pilates: null,
  }), ////---------ZONE FONCTION---------------////
  methods: {
    //les fonctions pour ouvrir les boites modales
    ouvreDialogue(test) {
      this.itemSelectionner = test;
      this.dialog = true;
      console.log(test);
    },
  },

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
.v-parallax {
  height: 200px;
}
.v-row {
  padding: 0 1.5rem;
}
h2 {
  font-family: var(--fontPrincipaleUn);
}
.v-card-title,
.v-alert-title {
  font-family: var(--fontPrincipaleUn);
  font-size: 1.5rem;
  color: #937fbc;
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
