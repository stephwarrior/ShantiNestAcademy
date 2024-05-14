<template>
  <main>
    <v-parallax>
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">Meditation</p>
      </div>
    </v-parallax>
    <v-breadcrumbs color="#937fbc" :items="items" class="d-none align-center d-md-flex"></v-breadcrumbs>

    <!--------------INTRO Meditation----------------->
    <SousTitres title="Qu'est-ce que le Meditation?" :subtitleColor="'#42a5a1'" />

    <v-window v-model="window" hide-arrows>
      <v-window-item v-for="(leMeditation, index) in descMedit" :key="index"
        ><v-row class="">
          <v-col class="">
            <p>
              {{ leMeditation.text }}
            </p>
          </v-col></v-row
        >
      </v-window-item>
    </v-window>

    <!------------------------------- COURS DE Meditation------------------------------->
    <SousTitres title="Quel cours de Meditation choisir ?" :subtitleColor="'#42a5a1'" />
    <v-row>
      <v-col class="blocMeditations" v-for="(Meditation, index) in coursMeditation" :key="index" cols="12" sm="6">
        <v-card @click="ouvreDialogue(Meditation)">
          <v-img :src="Meditation.img" cover></v-img>
          <v-card-title>{{ Meditation.cours }}</v-card-title>
          <v-card-text>
            {{ Meditation.textCourt }}
          </v-card-text>
          <v-card-actions>
            <v-btn text color="#42a5a1">En savoir plus</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <!-------------------------- MODAL COURS DE MEDITATION-------------------->
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title>{{ itemSelectionner.cours }} </v-card-title>
            <v-card-text> {{ itemSelectionner.text }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#42a5a1" text @click="dialog = false">Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <!-------------------------------CONSEILS---------------------------------->
    <SousTitres title="Conseils de nos professionnels" :subtitleColor="'#42a5a1'" />
    <v-row>
      <v-col v-for="(conseil, index) in cslMeditation" :key="index" cols="12" md="6">
        <v-alert border="start" border-color="#42a5a1" elevation="4" icon="mdi-check-circle">
          <v-alert-title>{{ conseil.titre }}</v-alert-title>
          <p>{{ conseil.texte }}</p>
        </v-alert>
      </v-col>
    </v-row>

    <!------------------------------NUTRITIONS------------------------------>
    <SousTitres title="Nutrition" :subtitleColor="'#42a5a1'" />
    <v-row>
      <v-col>
        <div class="listCslNutri">
          <ul class="cslNutri fill-height">
            <li><v-icon color="#42a5a1" size="sm">mdi-circle</v-icon> {{ conseils.conseilUn }}</li>
            <li><v-icon color="#42a5a1" size="sm">mdi-circle</v-icon> {{ conseils.conseilDeux }}</li>
            <li><v-icon color="#42a5a1" size="sm">mdi-circle</v-icon> {{ conseils.conseilTrois }}</li>
            <li><v-icon color="#42a5a1" size="sm">mdi-circle</v-icon> {{ conseils.conseilQuatre }}</li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </main>
</template>
<script>
//////////////////---IMPORTATIONS---/////////////////////
import SousTitres from "@/components/SousTitres.vue";
import pageMeditationData from "@/data/PageMeditation.js";
export default {
  //////////////////---EXPORTATIONS/DATA---/////////////////////
  data: () => ({
    items: pageMeditationData.items,
    coursMeditation: pageMeditationData.coursMedit,
    descMedit: pageMeditationData.descMedit,
    cslMeditation: pageMeditationData.cslMedit,
    /////////////////////ZONE BOOLEAN////////////////////////////
    dialog: false,
    itemSelectionner: null,
    ////////////////////carrousel intro meditation//////////////////
    window: 0,

    /////////////////////ZONE TEXTE CONSEILS////////////////////////////
    conseils: {
      conseilUn: "Mangez beaucoup de fruits et légumes pour une alimentation équilibrée.",
      conseilDeux: "Buvez beaucoup d'eau pour rester hydraté.",
      conseilTrois: "Évitez les repas lourds avant une séance de Meditation.",
      conseilQuatre: "Évitez les aliments transformés et les sucres ajoutés.",
    },
  }),
  ////------------------------------ZONE FONCTION-------------------------------////
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
/*//////////////////ANIMATION////////////////////*/

@keyframes animZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}
/*//////////////////GENERAL////////////////////*/
main {
  padding: 0;
  height: auto;
}
.v-parallax {
  height: 200px;
  background-color: #42a5a1;
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
  color: #42a5a1;
}
/*////////////La Meditation CEST QUOI//////////////*/
.v-card-text,
.v-btn {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
}
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

/*/ ///////////Cours de Meditation//////////////*/
.blocMeditations {
  margin-bottom: 2rem;
}
.blocMeditations .v-img {
  height: 200px;
}
.blocMeditations .v-card {
  margin: 0 2rem;

  border-radius: 20px;
}
.blocMeditations .v-card:hover {
  animation: animZoom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
/*/ ///////////NUTRITIONS//////////////*/

.listCslNutri {
  height: 300px;
}
.cslNutri {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
}

/*//////////////////------TABLETTE------////////////////////*/
@media (min-width: 976px) {
  .blocMeditations .v-img {
    height: 400px;
  }
}
</style>
