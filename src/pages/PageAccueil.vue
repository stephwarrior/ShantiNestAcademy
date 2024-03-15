<template>
  <main>
    <!--:style="{ borderRadius: '20px' }"-->
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
        <v-col cols="12" lg="6">
          <v-img :src="parallaxSrc" class="imgAp grey lighten-2"></v-img>
        </v-col>
        <v-col cols="12" lg="6">
          <p>{{ aPropos.descCourt }}</p>
          <v-btn class="btnVoirPlus" color="#644a9d" @click="dialogIntro"> Voir plus </v-btn>
        </v-col>
        <!--Boite modale pour voir plus de details (texte) sur SNA -->
        <v-dialog v-model="dialogInt" max-width="600px" max-height="600px">
          <v-card :style="{ borderRadius: '20px' }">
            <SiteLogo couleur="pink" taille="5rem" />
            <v-card-text>{{ aPropos.description }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="purple" @click="dialogInt = false">Fermer</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <!-----------------------------------ZONE EQUIPES----------------------------------->
      <SousTitres title="Notre Équipe" />
      <v-row class="equipes">
        <p>{{ messageEquipe }}</p>
        <v-carousel hide-delimiter-background :show-arrows="false" height="450px">
          <v-carousel-item cover v-for="(employee, index) in lesEmployees" :key="index">
            <v-col cols="auto">
              <v-card class="mx-auto" max-width="340px" height="auto" :style="{ borderRadius: '20px' }">
                <v-img
                  height="250px"
                  :src="employee.img"
                  :alt="employee.nom"
                  @click="onImageClick(employee)"
                  cover
                ></v-img>
                <v-card-title>{{ employee.nom }}</v-card-title>
                <v-card-subtitle>{{ employee.poste }}</v-card-subtitle>
                <v-card-subtitle>{{ employee.periode }}</v-card-subtitle>
                <v-card-actions>
                  <v-btn color="#644a9d" variant="text" @click="ouvreDialogue(employee)"> Voir plus </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-carousel-item>
        </v-carousel>
        <!--Boite modale pour voir plus de details (texte) sur les employee de SNA -->
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card :style="{ borderRadius: '20px' }">
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
      <!---------------------------ZONE AVIS/COMMENTAIRES------------------------------>
      <SousTitres title="Témoignages" />
      <v-row class="temoignage">
        <v-carousel hide-delimiters :show-arrows="false" progress="#644a9d" cycle>
          <v-carousel-item cover v-for="(commentaire, index) in lesCommentaires" :key="index">
            <v-col cols="auto" height="500px">
              <v-card class="mx-auto" max-width="340px" height="350px">
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

//////////////////---EXPORTATIONS/DATA---/////////////////////
export default {
  data() {
    return {
      message: "Bienvenue à ShantiNest Academy - votre havre pour méditation, yoga, et croissance personnelle.",
      messageLong:
        "Bienvenue à ShantiNest Academy - votre havre pour méditation, yoga, et croissance personnelle. Rejoignez-nous pour un voyage vers la sérénité et l'équilibre.",
      messageEquipe:
        "Au cœur de ShantiNest Academy se trouve une équipe unie par une passion commune pour le bien-être et l'épanouissement personnel. Notre groupe d'experts dévoués en yoga, pilates et méditation partage un objectif: vous accompagner vers une meilleure version de vous-même.",
      imgEmilie: require("@/img/PageAccueil/lesProfs/tomJaydusor.jpeg"),
      imgAccueil: require("../img/general/sna15.jpeg"),
      parallaxSrc: require("../img/general/sna03.jpeg"),
      parallaxDeux: require("../img/general/sna08.jpeg"),
      employees: [],
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
      dialogInt: false,
      itemSelectionner: null,
      employee: null,
    };
  },
  created() {
    this.employees = LesEmployees.lesEmployees.map((employee) => {
      let img;
      try {
        img = employee.img ? require(`${employee.img}`) : null;
      } catch (err) {
        console.error(`Failed to load image ${employee.img}: ${err}`);
        img = null;
      }
      return {
        ...employee,
        img,
      };
    });
  },
  methods: {
    naviguerVersCours(route) {
      this.$router.push(route);
    },
    ouvreDialogue(employee) {
      this.itemSelectionner = employee;
      this.dialog = true;
      //console.log(employee);
    },
    dialogIntro() {
      this.dialogInt = true;
    },
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
  width: 100vw;
}
/*////////////////// IMAGE INTRO PAGE ACCUEIL////////////////////*/
.imgIntro {
  padding: 0 20px;
}
.troisAction {
  padding-top: 30px;
  font-size: 1.3rem;
}
.troisAction p {
  font-family: "Kotta One", sans-serif;
}
.introTexte {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  color: white;
}
.introTexte > * {
  margin: 10px 0;
}

.sous-titre {
  font-family: "Kotta One", sans-serif;
  font-size: clamp(2rem, 0.7571rem + 1.2143vw, 4rem);
  color: white;
}
hr {
  width: 100px;
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
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
}

/*//////////////////A PROPOS////////////////////*/

.aPropos {
  justify-content: space-around;
  padding: 1rem 2rem;
}

.imgAp {
  border-radius: 20px;
}
.btnVoirPlus {
  border-radius: 20px;
  margin-top: 20px;
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
  font-size: 0.8rem;
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

/*//////////////////------TABLETTE------////////////////////*/
@media (min-width: 768px) {
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
/*//////////////////-----------GRAND ECRAN---------////////////////////*/
@media (min-width: 960px) {
  main {
    padding-top: 6rem;
  }
}
</style>
