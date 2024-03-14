<template>
  <main>
    <v-parallax height="200px" src="https://hips.hearstapps.com/hmg-prod/images/10-minute-yoga-1668510425.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">YOGA</p>
      </div>

      <!--<v-img
        height="400px"
        src="https://d33wubrfki0l68.cloudfront.net/772616e178d1844bb45cc244ee42ad217b0d4a64/6b6cf/images/schedule_main.png"
      ></v-img>-->
    </v-parallax>
    <v-breadcrumbs :items="items" class="d-none align-center d-md-flex"></v-breadcrumbs>

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
        <v-card>
          <v-img
            src="https://img.freepik.com/free-photo/young-woman-doing-pigeon-exercise_1163-5051.jpg?t=st=1710449067~exp=1710452667~hmac=5865854afabd73b1396a68618f105898aec5f826491204285ef79ef2f1a58978&w=1380"
            :width="auto"
            aspect-ratio="1/4"
            cover
          ></v-img>
          <v-card-title>{{ yoga.cours }}</v-card-title>
          <v-card-text>
            {{ yoga.textCourt }}
          </v-card-text>
          <v-card-actions>
            <v-btn @click="dialog = true" text color="pink">En savoir plus</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title> Mon titre sera ici </v-card-title>
            <v-card-text> Mon texte sera ici </v-card-text>
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
      <v-col v-for="(conseil, index) in cslYoga" :key="index" cols="12" md="6">
        <v-card>
          <v-card-title>{{ conseil.titre }}</v-card-title>
          <v-card-text>{{ conseil.texte }}</v-card-text>
        </v-card></v-col
      >
    </v-row>

    <!--------------NUTRITIONS----------------->
    <SousTitres title="Nutrition" />
  </main>
</template>
<script>
import SousTitres from "@/components/SousTitres.vue";
import pageYogaData from "@/data/PageYoga.json";
export default {
  data: () => ({
    items: pageYogaData.items,
    coursYoga: pageYogaData.coursYoga, // Utilisez les données importées ici
    descYoga: pageYogaData.descYoga,
    cslYoga: pageYogaData.cslYoga,
    length: 3,
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
  color: var(--couleurQuaternaire);
}
.v-parallax {
  height: 800px !important;
}
.v-row {
  padding: 0 1.5rem;
}
/*////////////LE YOGA CEST QUOI//////////////*/  
.leSt{
  color: var(--couleurQuaternaire) ;
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

/*/ ///////////COURS DE YOGA//////////////*/
.blocYogas {
  margin-bottom: 2rem;
}

/*////////////CONSEILS//////////////*/

/*/ ///////////NUTRITIONS//////////////*/
</style>
