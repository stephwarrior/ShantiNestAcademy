<template>
  <main>
    <v-parallax class="" height="500px" sm="4" :src="imgCourDeux">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">1er cours d'essai gratuit</p>
        <p class="text-h5">Découvrez notre offre de cours et trouvez celui qui vous convient</p>
        <RouterLink to="/HoraireTarifs">
          <v-btn class="mt-5 btnPrem">Explorer nos cours et leurs tarifs</v-btn></RouterLink
        >
      </div>
      <!--Div pour assombrir mon image -->
      <div class="overlay"></div>
    </v-parallax>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-row class="zoneCours justify-center">
      <!-----------------Intro court----------------------->
      <SousTitres title="Introduction à nos cours" />
      <v-row class="nosCours justify-space-around"
        ><v-col cols="12" md="4">
          <v-img :src="imgCourUn" class="imgAp"></v-img>
        </v-col>
        <v-col cols="12" md="auto" lg="7">
          <p>{{ texteCours }}</p>
          <v-list class="cours-list">
            <v-list-item class="cours-list-item" v-for="item in coursItems" :key="item">
              <v-list-item-icon>
                <v-icon color="purple">mdi-check-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ item }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
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

      <!-----------------Quoi amener----------------------->
      <SousTitres title="Quoi amener?" />
      <v-row class="essentiels align-center">
        <p>
          Pour profiter pleinement de votre expérience chez ShantiNest Academy, voici quelques recommandations sur ce
          qu'il faut apporter à vos cours :
        </p>
        <v-col class="lesEssentiels">
          <v-col
            class="essentielsBloc d-flex flex-column align-center"
            v-for="quoiAmener in quoiAmenerItems"
            :key="quoiAmener"
          >
            <v-icon>{{ quoiAmener.icone }}</v-icon>
            <h3>{{ quoiAmener.titre }}</h3>
            <p>{{ quoiAmener.texte }}</p>
          </v-col></v-col
        >
        <p>
          Nous sommes impatients de vous accueillir et de vous guider dans votre parcours de bien-être chez ShantiNest
          Academy.
        </p>
      </v-row>
    </v-row>
  </main>
</template>
<script>
import SousTitres from "@/components/SousTitres.vue";
import lesCours from "@/data/PageAccueil/lesCours.js";

export default {
  data: () => ({
    coursItems: [
      "En personne",
      "En ligne",
      "En groupe",
      "En privé",
      "Parent-Enfant",
      "Thérapeutique",
      "Pour les aînés",
      "Prénatal - postnatal",
    ],
    quoiAmenerItems: [
      {
        icone: "mdi-check-circle",
        titre: "Tapis de yoga",
        texte: "Essentiel pour vos séances de yoga et de méditation.",
      },
      {
        icone: "mdi-check-circle",
        titre: "Tenue confortable",
        texte: "Optez pour des vêtements qui ne restreignent pas vos mouvements.",
      },
      { icone: "mdi-check-circle", titre: "Bouteille d'eau", texte: "Restez hydraté tout au long de votre séance." },
      { icone: "mdi-check-circle", titre: "Serviette", texte: "Pour votre confort personnel et l'hygiène." },
      {
        icone: "mdi-check-circle",
        titre: "Esprit ouvert et sourire",
        texte: "Le plus important pour une expérience enrichissante !",
      },
    ],
    /////////////////LES IMAGES/////////////////////
    imgCourUn: require("@/img/general/sna17.jpeg"),
    imgCourDeux: require("@/img/general/sna12.jpeg"),

    /////////////////LES COURS/////////////////////
    lesCours: lesCours.lesCours,

    /////////////////////ZONE TEXTE////////////////////////////
    texteCours:
      "Notre académie offre une sélection diversifiée de cours, conçus pour répondre aux besoins de chacun, que vous soyez débutant ou avancé. De l'énergisant yoga, qui renforce le corps et apaise l'esprit, au pilates, parfait pour sculpter votre silhouette et améliorer votre posture, en passant par la méditaion qui invite à la réflexion intérieure et à la sérénité, nos cours sont animés par des instructeurs passionnés et expérimentés. Chaque discipline est enseignée dans le respect des capacités individuelles,permettant à tous de progresser à leur rythme, dans un environnement accueillant et bienveillant. ShantiNest Academy est plus qu'un simple lieu d'apprentissage ; c'est une communauté où grandir ensemble, partager etdécouvrir son potentiel illimité. Nous vous invitons à explorer notre offre de cours et à trouver le chemin qui résonne le plus avec vous. Rejoignez-nous pour débuter votre voyage vers une meilleure version de vous-même. Bienvenue à la maison, bienvenue à ShantiNest Academy.",
    quoiAmener:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ////////////////////////////////////////

    items: [
      {
        title: "Accueil",
        desactive: false,
        href: "/",
      },
      {
        title: "Cours",
        desactive: true,
      },
    ],
  }),
  components: {
    SousTitres,
  },
};
</script>
<style scoped>
p {
  text-align: start;
  line-height: 2;
}

.v-parallax {
  height: 200px;
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
.essentiels {
  padding: 2rem;
}
.essentiels > * {
  margin: 1.5rem 0;
}

.lesEssentiels {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.essentielsBloc {
  width: 230px;
}
.nosCours .v-img {
  border-radius: 20px;
}

.zoneCours {
  padding: 0 2rem;
  text-align: center;
}

.cours-list {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  align-items: flex-start;
  background-color: transparent;
  padding: 70px 0;
}
.btnPrem {
  color: #42a5a1;
  border-radius: 20px;
}
.btnPrem:hover {
  background-color: #42a5a1;
  color: white;
}
/*//////////////////LES COURS////////////////////*/
.blocCours {
  text-align: center;
  color: white;
  font-size: clamp(1.5rem, 0.7571rem + 1.2143vw, 3rem);
}
.blocCours .v-img,
.v-btn {
  border-radius: 20px;
}
.blocCours .v-btn:hover {
  background-color: white !important;
  color: #42a5a1 !important;
}
.lesCours {
  padding: 1rem 2rem;
}

.equipes .v-btn:hover {
  background-color: #42a5a1;
  color: white !important;
}
/*//////////////////------TABLETTE------////////////////////*/
@media (min-width: 768px) {
  .lesEssentiels {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: space-evenly;
  }
  .blocCours {
    font-size: 1.2rem;
    height: 400px;
  }
  .cours-list {
    height: 254px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    align-content: space-evenly;
  }
}
/*//////////////////-----------GRAND ECRAN---------////////////////////*/

@media (min-width: 960px) {
  .essentiels {
    display: flex;
    flex-direction: column;
  }
  /*//////////////////LES COURS////////////////////*/
  .blocCours {
    height: 500px;
  }
  .lesCours {
    padding: 1rem 2rem;
  }
}

/*//////////////////-----------GRAND ECRAN plus---------////////////////////*/
@media (min-width: 1200px) {
  .blocCours {
    height: 300px;
  }
}
</style>
