<template>
  <main>
    <v-container>
      <!---------------------------ZONE IMG PAGE ACCUEIL----------------------------->

      <v-img class="imgIntro" :src="imageAcc" height="600px" cover>
        <v-row class="fill-height flex-column justify-center">
          <v-col class="troisAction d-flex justify-space-around text-white">
            <p>Respirer.</p>
            <p>Méditer.</p>
            <p>Vivez.</p>
          </v-col>
          <!--Div pour assombrir mon image -->
          <div class="overlay"></div>
          <v-col class="introTexte">
            <p class="sous-titre">Bienvenue à ShantiNest Academy</p>
            <hr />
            <p>{{ message }}</p>
            <RouterLink to="/HoraireTarifs"><v-btn class="btnIntro"> Réservez maintenant</v-btn></RouterLink>
          </v-col>
        </v-row>
      </v-img>

      <!-----------------------------ZONE A PROPOS----------------------------------->
      <SousTitres title="Qui sommes nous?" />
      <v-row class="aPropos">
        <v-col class="testing" cols="12" sm="6" lg="4">
          <v-img :src="imgApropos" class="imgAp grey lighten-2"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <p>{{ aPropos.descCourt }}</p>
          <v-btn class="btnVoirPlus" color="#42A5A1" @click="dialogIntro"> Voir plus </v-btn>
        </v-col>
        <!--Boite modale pour voir plus de details (texte) sur SNA -->
        <v-dialog class="modaleApropos" v-model="dialogInt">
          <v-card>
            <v-btn @click="dialogInt = false">X</v-btn>
            <SousTitres title="Qui sommes nous?" />
            <v-card-text>{{ aPropos.description }}</v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
      <!-----------------------------------ZONE EQUIPES----------------------------------->
      <SousTitres title="Notre Équipe" />
      <v-row class="equipes">
        <v-row class="equipe">
          <v-col cols="12" sm="auto" md="6">
            <p>{{ textEquipe }}</p>
          </v-col>
          <v-col class="testiing" cols="12" md="6" lg="4">
            <v-img :src="imgEquipe" class="imgEq"></v-img>
          </v-col>
        </v-row>
        <!--Carroussel pour mobile seulement-->
        <v-carousel class="d-xs-flex d-sm-none" hide-delimiters progress="#42A5A1">
          <v-carousel-item v-for="(employee, index) in lesEmployees" :key="index">
            <v-col cols="auto" height="500px">
              <v-card class="mx-auto" max-width="340px" height="450px">
                <v-img :src="employee.img" alt="avatar" height="300px" cover @click="clickImage(employee)"></v-img>

                <v-card-title>{{ employee.nom }}</v-card-title>
                <v-card-subtitle>{{ employee.poste }}</v-card-subtitle>
                <v-card-subtitle>{{ employee.periode }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="#42A5A1" variant="outlined" @click="ouvreDialogue(employee)"> Voir plus </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-carousel-item>
        </v-carousel>

        <!--Bloc introduit les employees de SNA-->
        <v-col class="d-none d-sm-flex" cols="12" sm="4" md="3" v-for="(employee, index) in lesEmployees" :key="index">
          <v-card class="zbone mx-auto" width="300px" height="380px" elevation="2" @click="ouvreDialogue(employee)">
            <v-img :src="employee.img" alt="avatar" height="230px" cover @click="clickImage(employee)"></v-img>
            <v-card-title>{{ employee.nom }}</v-card-title>
            <v-card-subtitle>{{ employee.poste }}</v-card-subtitle>
            <v-card-subtitle>{{ employee.periode }}</v-card-subtitle>
            <v-card-item>
              <v-btn color="#42A5A1" variant="outlined"> Voir plus </v-btn>
            </v-card-item>
          </v-card>
        </v-col>

        <!--Boite modale pour voir plus de details (texte) sur les employee de SNA -->
        <v-dialog class="textEmployee" v-model="dialog" max-width="600px">
          <v-card>
            <v-img :src="itemSelectionner.img" alt="avatar" height="500px" cover>
              <v-btn @click="dialog = false">X</v-btn></v-img
            >

            <v-card-title>{{ itemSelectionner.nom }}</v-card-title>
            <v-card-text>{{ itemSelectionner.description }}</v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
      <!--------------------------------------ZONE COURS---------------------------------->
      <SousTitres title="Nos cours" />
      <v-row class="lesCours">
        <v-col class="blocCours" v-for="(cours, index) in lesCours" :key="index" cols="12" sm="4" lg="4">
          <v-img
            :src="cours.img"
            alt="image"
            height="100%"
            width="100%"
            cover
            class="d-flex align-center justify-center"
            ><h1>{{ cours.cours }}</h1>
            <v-btn :to="cours.url" color="#42A5A1">Voir plus...</v-btn>
            <div class="overlay"></div>
          </v-img>
        </v-col>
      </v-row>
      <!---------------------------ZONE AVIS/COMMENTAIRES------------------------------>
      <SousTitres title="Témoignages" />
      <v-row class="temoignage">
        <v-col
          class="d-none d-sm-flex"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(commentaire, index) in lesCommentaires"
          :key="index"
        >
          <v-card class="carteComm mx-auto" width="400px" height="350px" elevation="10">
            <div class="clients">
              <v-avatar prepend>
                <img :src="commentaire.img" alt="avatar" cover />
              </v-avatar>

              <v-card-title>{{ commentaire.nom }}</v-card-title>
            </div>
            <v-rating v-model="rating" active-color="#644a9d" color="grey" readonly></v-rating>
            <v-card-subtitle class="text-h6">{{ commentaire.sousTitre }}</v-card-subtitle>
            <v-card-text>{{ commentaire.comm }}</v-card-text>
          </v-card>
        </v-col>
        <!-------Carroussel avis clients pour mobile seulement--------->
        <v-carousel class="d-xs-flex d-sm-none" hide-delimiters progress="#644a9d" :show-arrows="false">
          <v-carousel-item cover v-for="(commentaire, index) in lesCommentaires" :key="index">
            <v-col>
              <v-card class="mx-auto" max-width="340px" height="400px">
                <div class="clients">
                  <v-avatar prepend>
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
//////////////////---IMPORTATIONS---/////////////////////
import aPropos from "@/data/PageAccueil/aPropos.json";
import commentaires from "@/data/PageAccueil/commentaires.json";
import lesCours from "@/data/PageAccueil/lesCours.js";
import LesEmployees from "@/data/PageAccueil/lesEmployee.js";
import SousTitres from "@/components/SousTitres.vue";

export default {
  //////////////////---EXPORTATIONS/DATA---/////////////////////
  data() {
    return {
      /////////////////////ZONE TEXTE////////////////////////////
      message: "Bienvenue à ShantiNest Academy - votre havre pour méditation, yoga, et croissance personnelle.",
      textEquipe:
        "Au cœur de ShantiNest Academy se trouve une équipe unie par une passion commune pour le bien-être et l'épanouissement personnel. Notre groupe d'experts dévoués en yoga, pilates et méditation partage un objectif: vous accompagner vers une meilleure version de vous-même.Nous sommes là pour vous aider à trouver la paix intérieure, la force et la sérénité. Nous sommes là pour vous aider à trouver votre équilibre. Nous sommes là pour vous aider à trouver votre voie. Nous sommes là pour vous aider à trouver votre SNA. Bienvenue à la maison. Bienvenue à ShantiNest Academy.",

      /////////////////LES IMAGES/////////////////////
      imgApropos: require("../img/general/sna03.jpeg"),
      imageAcc: require("../img/general/sna08.jpeg"),
      imgEquipe: require("../img/general/sna05.jpeg"),

      /////////////////DATA EXTERNE/////////////////////
      aPropos: aPropos.aPropos,
      lesCommentaires: commentaires.lesCommentaires,
      lesCours: lesCours.lesCours,
      lesEmployees: LesEmployees.lesEmployees,

      /////////////////////ZONE BOOLEAN////////////////////////////
      montrer: false, //Boite modale pour voir plus de details (texte) sur SNA
      dialog: false, //Boite modale pour voir plus de details (texte) sur les employee de SNA
      dialogInt: false, //Boite modale pour voir plus de details (texte) sur SNA

      ////////////////////BLOC EQUIPE//////////////////

      itemSelectionner: null,
      employee: null,

      ////////////////////BLOC COMMENTAIRES//////////////////
      rating: 5,
    };
  },
  components: {
    SousTitres,
  },

  ////---------------------------ZONE FONCTION-----------------------////
  methods: {
    //les fonctions pour ouvrir les boites modales
    ouvreDialogue(employee) {
      this.itemSelectionner = employee;
      this.dialog = true;
      //console.log(employee);
    },
    dialogIntro() {
      this.dialogInt = true;
    },
  },
};
</script>
<style scoped>
/*//////////////////ANIMATION////////////////////*/
@keyframes slide-in-blurred-top {
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}

@keyframes animZoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}

/*//////////////////GLOBAL////////////////////*/
main {
  padding: 0;
  padding-top: 3rem;
  height: auto;
}

.v-container {
  padding: 0;
  max-width: none;
}
.lesCours,
.equipes,
.temoignage {
  padding: 1rem 2rem;
}
.blocCours .v-img,
.v-card,
.v-btn,
.imgAp,
.imgEq,
.blocCours {
  border-radius: 20px;
}
.v-card-text,
.v-btn {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
}
/*////////////////// IMAGE INTRO PAGE ACCUEIL////////////////////*/
.imgIntro {
  padding: 0 20px;
}
.troisAction {
  padding-top: 30px;
  font-size: clamp(1.3rem, 0.7571rem + 1.2143vw, 2rem);
}
.troisAction p {
  font-family: "Kotta One", sans-serif;
}
.troisAction :nth-of-type(1) {
  animation: slide-in-blurred-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.troisAction :nth-of-type(2) {
  animation: slide-in-blurred-top 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.troisAction :nth-of-type(3) {
  animation: slide-in-blurred-top 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.introTexte {
  color: white;
}
.introTexte > * {
  margin: 10px 0;
}
.sous-titre {
  font-family: "Kotta One", sans-serif;
  font-size: clamp(2.5rem, 0.7571rem + 1.2143vw, 4rem);
  color: white;
}
hr {
  width: 50vw;
  height: 2px;
  background-color: white;
  margin: 10px 0;
}
.btnIntro {
  color: #42a5a1;
  border-radius: 20px;
}
.btnIntro:hover {
  background-color: #42a5a1;
  color: white;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: -1;
}

/*//////////////////A PROPOS////////////////////*/

.aPropos {
  justify-content: space-around;
  padding: 1rem 2rem;
}
.testing,
.testiing {
  width: auto;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 20px;
}
.imgAp,
.imgEq {
  width: 100%;
  transition: 0.5s all ease-in-out;
}

.imgAp:hover,
.imgEq:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.btnVoirPlus {
  margin-top: 20px;
}
.btnVoirPlus:hover {
  background-color: white !important;
  color: #42a5a1 !important;
}
.v-dialog {
  max-height: 800px;
  max-width: 750px;
  line-height: 2;
}
.modaleApropos .v-btn {
  direction: rtl;
}
/*/ /////////////////EQUIPES////////////////////*/
.equipe {
  justify-content: space-around;
  margin-bottom: 3rem;
}
.equipes .v-card {
  margin: 1rem;
}
.equipes .v-btn:hover {
  background-color: #42a5a1;
  color: white !important;
}
.zbone:hover {
  cursor: pointer;
  animation: animZoom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.textEmployee .v-card .v-img {
  direction: rtl;
}

.textEmployee .v-btn {
  margin: 0.8rem;
}

/*//////////////////LES COURS////////////////////*/
.blocCours {
  text-align: center;
  color: white;
  font-size: clamp(1.5rem, 0.7571rem + 1.2143vw, 3rem);
}
.blocCours .v-btn:hover {
  background-color: white !important;
  color: #42a5a1 !important;
}

/*/ /////////////////TEMPOIGNAGES////////////////////*/

.clients {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 1rem 0;
}
.carteComm:hover {
  animation: animZoom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.v-card-title {
  font-size: 1.3rem;
  font-family: "Kotta One", sans-serif;
  color: var(--couleurTexte);
}

.v-card-text {
  font-size: 0.8rem;
}
/*--------------Carrousel mobile--------*/
.temoignage {
  display: flex;
}

.temoignage-carousel .v-carousel__controls {
  align-items: center;
}
.temoignage-carousel .v-carousel__controls .v-btn {
  background-color: #644a9d;
}
.temoignage-carousel .v-carousel__item {
  height: 200px;
}

/*//////////////////------TABLETTE------////////////////////*/
@media (min-width: 768px) {
  .introTexte {
    align-items: center;
  }
  /*/////////////////////////////*/
  .blocCours {
    font-size: 1.2rem;
    height: 400px;
  }
}

/*//////////////////-----------GRAND ECRAN---------////////////////////*/
@media (min-width: 960px) {
  main {
    padding-top: 4.2rem;
  }
  .aPropos,
  .lesCours,
  .equipes,
  .temoignage {
    padding: 5rem 5rem;
  }

  .aPropos p,
  .equipe p {
    font-size: 1.2rem;
    line-height: 2;
  }

  /*//////////////////LES COURS////////////////////*/
  .blocCours {
    height: 500px;
  }
}

/*//////////////////-----------GRAND ECRAN plus---------////////////////////*/
@media (min-width: 1200px) {
  .blocCours {
    height: 300px;
  }
}
</style>
