<template>
  <main>
    <v-parallax height="400px" sm="4" :src="parallaxSrc">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">Bienvenue à ShantiNest Academy</p>
      </div>
    </v-parallax>
    <v-container>
      <!--------------ZONE A PROPOS----------------->
      <SousTitres title="Qui sommes nous" />
      <v-row class="aPropos">
        <v-col cols="12" lg="6" class="glee">
          <v-img :src="parallaxDeux" class="imgAp grey lighten-2"></v-img>
        </v-col>
        <v-col cols="12" lg="6">
          <p>{{ aPropos.description }}</p>
        </v-col>
      </v-row>
      <!--------------ZONE EQUIPES----------------->
      <SousTitres title="Notre Équipe" />
      <v-row class="equipes">
        <p>
          Au cœur de ShantiNest Academy se trouve une équipe unie par une passion commune pour le bien-être et
          l'épanouissement personnel. Notre groupe d'experts dévoués en yoga, pilates et méditation partage un objectif
          : vous accompagner vers une meilleure version de vous-même.
        </p>
        <v-carousel hide-delimiters :show-arrows="false">
          <v-carousel-item cover v-for="(employee, index) in lesEmployees" :key="index">
            <v-col cols="auto" height="500px">
              <v-card class="mx-auto" max-width="340px" height="350px">
                <v-avatar v-slots:prepend>
                  <img :src="employee.img" alt="avatar" cover />
                </v-avatar>
                <v-card-title>{{ employee.nom }}</v-card-title>
                <v-card-subtitle>{{ employee.poste }}</v-card-subtitle>
                <v-card-subtitle>{{ employee.periode }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="teal-accent-4" variant="text" @click="ouvreDialogue(employee)"> Voir plus </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-carousel-item>
        </v-carousel>
        <!--
        <v-col v-for="(employee, index) in lesEmployees" :key="index">
          <v-card class="mx-auto" max-width="200">
            <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

            <v-card-title>{{ employee.nom }} </v-card-title>

            <v-card-subtitle> {{ employee.poste }} </v-card-subtitle>
            <v-card-subtitle>{{ employee.periode }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="teal-accent-4" variant="text" @click="ouvreDialogue(employee)"> Voir plus </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>-->
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>{{ itemSelectionner.nom }}</v-card-title>
            <v-card-text>{{ itemSelectionner.description }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!--------------ZONE COURS----------------->
      <SousTitres title="Nos cours " />
      <v-row class="lesCours">
        <v-col v-for="(cours, index) in lesCours" :key="index" cols="12" md="4" lg="4">
          <v-card
            class="testCart"
            image="https://media.cntraveler.com/photos/5be07adbcfd2bb17f97a7a52/16:9/w_3199,h_1799,c_limit/MAG18_DEC_TR120818_SG_Flores02.jpg"
          >
            <h1>{{ cours.cours }}</h1>
            <v-btn :to="cours.url" variant="outlined">Voir plus...</v-btn>
          </v-card></v-col
        >
      </v-row>
      <!--------------ZONE AVIS/COMMENTAIRES----------------->
      <SousTitres title="Témoignages" />
      <v-row class="temoignage">
        <v-carousel hide-delimiters :show-arrows="false" progress="#644a9d" cycle>
          <v-carousel-item cover v-for="(commentaire, index) in lesCommentaires" :key="index">
            <v-col cols="auto" height="500px">
              <v-card class="mx-auto" max-width="340px" height="350px">
                <div class="clients">
                  <v-avatar v-slots:prepend>
                    <img :src="commentaire.img" alt="avatar" cover />
                  </v-avatar>

                  <v-card-title>{{ commentaire.nom }}</v-card-title>
                </div>
                <v-rating v-model="rating" active-color="#644a9d" color="grey" readonly></v-rating>
                <v-card-subtitle class="text-h6">{{ commentaire.sousTitre }}</v-card-subtitle>
                <v-card-text>{{ commentaire.comm }}</v-card-text>
              </v-card>
            </v-col>
          </v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
  </main>
</template>
<script>
//import UnCarousel from "../components/UnCarousel.vue";
import SousTitres from "@/components/SousTitres.vue";
import aPropos from "@/data/PageAccueil/aPropos.json";
import commentaires from "@/data/PageAccueil/commentaires.json";
import lesCours from "@/data/PageAccueil/lesCours.json";
import LesEmployees from "@/data/PageAccueil/lesEmployee.json";

export default {
  data() {
    return {
      parallaxSrc: require("../img/general/sna08.jpeg"),
      parallaxDeux: require("../img/general/sna03.jpeg"),
      //////////////////////////////////////
      aPropos: aPropos.aPropos,
      lesCommentaires: commentaires.lesCommentaires,
      lesCours: lesCours.lesCours,
      lesEmployees: LesEmployees.lesEmployees,
      //////////////////////////////////////
      rating: 5,
      reveal: false,
      montrer: false,
      dialog: false,
      itemSelectionner: null,
    };
  },
  components: {
    SousTitres,
  },
  methods: {
    naviguerVersCours(route) {
      this.$router.push(route);
    },
    ouvreDialogue(employee) {
      this.itemSelectionner = employee;
      this.dialog = true;
      // console.log(employee);
    },
  },
};
</script>
<style scoped>
main {
  padding: 0;
  height: auto;
}
.v-container {
  padding: 0;
}

/*//////////////////A PROPOS////////////////////*/

.aPropos {
  justify-content: space-around;
  padding: 1rem 2rem;
}
.imgAp {
  border-radius: 20px;
}

/*/ /////////////////EQUIPES////////////////////*/

/*//////////////////LES COURS////////////////////*/
.testCart {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: clamp(1.5rem, 0.7571rem + 1.2143vw, 3rem);
  border-radius: 20px;
}
.lesCours,
.equipes,
.temoignage {
  padding: 1rem 2rem;
}

.testCart:hover {
  background-color: blue;
}

.textCours {
  color: white;
}
.titreCours {
  color: white;
  font-size: 2.7rem;
}

/*/ /////////////////TEMPOIGNAGES////////////////////*/

.temoignage {
  display: flex;
  flex-direction: column;
}
.temoignage .v-card {
  border-radius: 20px;
}
.clients {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1rem 0;
}
.v-card-title {
  font-size: 1.3rem;
  font-family: "Kotta One", sans-serif;
  color: var(--couleurTexte);
}

.v-card-text {
  font-size: 0.7rem;
}
/*--------------CAROUSEL--------*/
.temoignage-carousel .v-carousel__controls {
  align-items: center;
}

.temoignage-carousel .v-carousel__controls .v-btn {
  background-color: #644a9d;
}
.temoignage-carousel .v-carousel__item {
  height: 200px;
}

/*//////////////////Tablette////////////////////*/
@media (min-width: 768px) {
  .aPropos {
    padding: 4rem;
  }
  .aPropos p {
    font-size: 1.3rem;
  }
  /*/////////////////////////////*/
  .testCart {
    height: 300px;
  }
  /*/////////////////////////////*/

  /*/////////////////////////////*/

  /*/////////////////////////////*/
}
/*//////////////////Grand Ecran////////////////////*/
@media (min-width: 960px) {
}
</style>
