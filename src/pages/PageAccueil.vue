<template>
  <main>
    <v-container>
      <!---------------------------ZONE IMG PAGE ACCUEIL----------------------------->

      <v-img class="imgIntro" :src="parallaxDeux" height="600px" cover>
        <v-row class="fill-height flex-column align-content-space-between">
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
            <v-btn class="btnIntro"> Réservez maintenant</v-btn>
          </v-col>
        </v-row>
      </v-img>

      <!-----------------------------ZONE A PROPOS----------------------------------->
      <SousTitres title="Qui sommes nous?" />
      <v-row class="aPropos">
        <v-col cols="12" sm="6" lg="4">
          <v-img :src="parallaxSrc" class="imgAp grey lighten-2"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <p>{{ aPropos.descCourt }}</p>
          <v-btn class="btnVoirPlus" color="#42A5A1" @click="dialogIntro"> Voir plus </v-btn>
        </v-col>
        <!--Boite modale pour voir plus de details (texte) sur SNA -->
        <v-dialog class="modaleApropos" v-model="dialogInt">
          <v-card>
            <SiteLogo couleur="pink" taille="5rem" />
            <v-card-text>{{ aPropos.description }}</v-card-text>
            <v-btn color="#644a9d" @click="dialogInt = false">Fermer</v-btn>
          </v-card>
        </v-dialog>
      </v-row>
      <!-----------------------------------ZONE EQUIPES----------------------------------->
      <SousTitres title="Notre Équipe" />
      <v-row class="equipes">
        <v-row class="equipe">
          <v-col cols="12" sm="6">
            <p>{{ textEquipe }}</p>
          </v-col>
          <v-col cols="12" sm="6" lg="4">
            <v-img :src="imgEquipe" class="imgAp"></v-img>
          </v-col>
        </v-row>

        <!--Bloc introduit les employees de SNA-->
        <v-col class="d-none d-sm-flex" cols="12" sm="4" md="3" v-for="(employee, index) in lesEmployees" :key="index">
          <v-card class="mx-auto" width="300px" height="380px">
            <v-img :src="employee.img" alt="avatar" height="230px" cover @click="onImageClick(employee)"></v-img>
            <v-card-title>{{ employee.nom }}</v-card-title>
            <v-card-subtitle>{{ employee.poste }}</v-card-subtitle>
            <v-card-subtitle>{{ employee.periode }}</v-card-subtitle>
            <v-card-item>
              <v-btn color="#42A5A1" @click="ouvreDialogue(employee)"> Voir plus </v-btn>
            </v-card-item>
          </v-card>
        </v-col>
        <!--Carroussel pour mobile seulement-->
        <v-carousel class="d-xs-flex d-sm-none" hide-delimiter-background :show-arrows="false">
          <v-carousel-item cover v-for="(employee, index) in lesEmployees" :key="index">
            <v-col cols="auto" height="500px">
              <v-card class="mx-auto" max-width="340px" height="350px">
                <v-img :src="employee.img" alt="avatar" height="200px" cover="" @click="onImageClick(employee)"></v-img>

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

        <!--Boite modale pour voir plus de details (texte) sur les employee de SNA -->
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card :style="{ borderRadius: '20px' }">
            <v-img :src="itemSelectionner.img" alt="avatar" height="200px" cover></v-img>

            <v-card-title>{{ itemSelectionner.nom }}</v-card-title>
            <v-card-text>{{ itemSelectionner.description }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#644a9d" text @click="dialog = false">Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!--------------------------------------ZONE COURS---------------------------------->
      <SousTitres title="Nos cours" />
      <v-row class="lesCours">
        <v-col v-for="(cours, index) in lesCours" :key="index" cols="12" sm="4" lg="4">
          <v-card
            class="blocCours"
            image="https://media.cntraveler.com/photos/5be07adbcfd2bb17f97a7a52/16:9/w_3199,h_1799,c_limit/MAG18_DEC_TR120818_SG_Flores02.jpg"
          >
            <h1>{{ cours.cours }}</h1>
            <v-btn :to="cours.url" variant="outlined">Voir plus...</v-btn>
          </v-card></v-col
        >
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
          <v-card class="mx-auto" width="400px" height="350px">
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

        <!--Carroussel avis clients pour mobile seulement-->
        <v-carousel class="d-xs-flex d-sm-none" hide-delimiter-background :show-arrows="false">
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
import SousTitres from "@/components/SousTitres.vue";
import aPropos from "@/data/PageAccueil/aPropos.json";
import commentaires from "@/data/PageAccueil/commentaires.json";
import lesCours from "@/data/PageAccueil/lesCours.json";
import LesEmployees from "@/data/PageAccueil/lesEmployee.json";
import SiteLogo from "@/components/SiteLogo.vue";

import tomJaydusorImage from "@/img/ddk.jpg";
import tomImage from "@/img/PageAccueil/lesProfs/tomJaydusor.jpeg";
//import monImgs from "@/img/general/sna03.jpeg";

export default {
  //////////////////---EXPORTATIONS/DATA---/////////////////////
  data() {
    //console.log(tomJaydusorImage);
    const employeesWithImages = LesEmployees.lesEmployees.map((employee) => {
      let image;
      switch (employee.id) {
        case 1:
          image = tomJaydusorImage;
          break;
        case 2:
          image = tomImage;
          break;
        default:
          image = "";
          break;
      }
      return { ...employee, img: image };
    });
    return {
      lesEmployees: employeesWithImages,

      /////////////////////ZONE TEXTE////////////////////////////
      message: "Bienvenue à ShantiNest Academy - votre havre pour méditation, yoga, et croissance personnelle.",
      textEquipe:
        "Au cœur de ShantiNest Academy se trouve une équipe unie par une passion commune pour le bien-être et l'épanouissement personnel. Notre groupe d'experts dévoués en yoga, pilates et méditation partage un objectif: vous accompagner vers une meilleure version de vous-même.Nous sommes là pour vous aider à trouver la paix intérieure, la force et la sérénité. Nous sommes là pour vous aider à trouver votre équilibre. Nous sommes là pour vous aider à trouver votre voie. Nous sommes là pour vous aider à trouver votre SNA. Bienvenue à la maison. Bienvenue à ShantiNest Academy.",

      /////////////////LES IMAGES/////////////////////
      imgEmilie: require("@/img/PageAccueil/lesProfs/tomJaydusor.jpeg"),
      imgAccueil: require("../img/general/sna15.jpeg"),
      parallaxSrc: require("../img/general/sna03.jpeg"),
      parallaxDeux: require("../img/general/sna08.jpeg"),
      imgEquipe: require("../img/general/sna05.jpeg"),

      /////////////////DATA EXTERNE/////////////////////
      aPropos: aPropos.aPropos,
      lesCommentaires: commentaires.lesCommentaires,
      lesCours: lesCours.lesCours,
      //lesEmployees: LesEmployees.lesEmployees,
      employees: LesEmployees.lesEmployees,

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

  ////---------ZONE FONCTION---------------////
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

    ////Aide pour mon probleme dimage qui ne saffiche pas
    onImageClick(employee) {
      console.log(employee.img);
    },
  },
  components: {
    SousTitres,
    SiteLogo,
  },
};
</script>
<style scoped>
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
.v-card,
.v-btn,
.imgAp,
.blocCours {
  border-radius: 20px;
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
.introTexte {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
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
  color: #937fbc;
  border-radius: 20px;
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

.btnVoirPlus {
  margin-top: 20px;
}
.v-dialog {
  max-height: 800px;
  max-width: 750px;
  line-height: 2;
}
/*/ /////////////////EQUIPES////////////////////*/
.equipe {
  justify-content: space-around;
  margin-bottom: 3rem;
}
.equipes .v-card {
  margin: 1rem;
}
/*//////////////////LES COURS////////////////////*/
.blocCours {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: clamp(1.5rem, 0.7571rem + 1.2143vw, 3rem);
}

/*/ /////////////////TEMPOIGNAGES////////////////////*/

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
