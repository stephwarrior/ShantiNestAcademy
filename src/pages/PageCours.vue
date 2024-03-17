<template>
  <main>
    <v-parallax class="" height="500px" sm="4" :src="imgCourDeux">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">1er cours d'essai gratuit</p>
        <p class="text-h5">Découvrez notre offre de cours et trouvez celui qui vous convient</p>
        <v-btn class="mt-5" color="white" dark>Explorer nos cours et leurs tarifs</v-btn>
      </div>
      <!--Div pour assombrir mon image -->
      <div class="overlay"></div>
    </v-parallax>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-row class="zoneCours justify-center">
      <!-----------------Intro court----------------------->
      <SousTitres title="Nos cours" />
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

      <!-----------------Les page cours--------------------->
      <v-row class="lesCours d-none">
        <v-col v-for="(cours, index) in lesCours" :key="index" cols="12" sm="4" lg="4">
          <v-card
            class="blocCours"
            image="https://media.cntraveler.com/photos/5be07adbcfd2bb17f97a7a52/16:9/w_3199,h_1799,c_limit/MAG18_DEC_TR120818_SG_Flores02.jpg"
          >
            <h1>{{ cours.cours }}</h1>
            <v-btn :to="cours.url" variant="outlined">Explorer</v-btn>
          </v-card></v-col
        >
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
    imgCourUn: require("@/img/general/sna06.jpeg"),
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
.v-img {
  border-radius: 20px;
}

.v-parallax {
  height: 200px;
}
.zoneCours {
  padding: 0 2rem;
  text-align: center;
}
.blocCours {
  height: 500px;
}
.cours-list {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  align-items: flex-start;
  background-color: transparent;
  padding: 70px 0;
}
@media (min-width: 768px) {
  .cours-list {
    height: 254px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    align-content: space-evenly;
  }
  .lesEssentiels {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: space-evenly;
  }
}

@media (min-width: 960px) {
  .essentiels {
    display: flex;
    flex-direction: column;
  }
}
</style>
