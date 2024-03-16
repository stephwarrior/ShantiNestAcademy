<template>
  <main>
    <v-parallax class="" height="500px" sm="4" :src="imgCourDeux">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">Cours</p>
      </div>
    </v-parallax>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-row class="zoneCours">
      <SousTitres title="Nos cours" />

      <!-----------------Intro court----------------------->
      <v-row class="nosCours"
        ><v-col cols="12" sm="6" lg="4">
          <v-img :src="imgCourUn" class="imgAp"></v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <p>{{ texteCours }}</p>
        </v-col>
      </v-row>
      <v-row class="lesCours">
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
      <!-----------------Quel cours de Yoga choisir--------------------->

      <!-----------------Quoi amener----------------------->

      <v-col cols="12">
        <SousTitres title="Quoi amener?" />

        <p>{{ quoiAmener }}</p>
      </v-col>
      <v-col cols="12">
        <SousTitres title="Une expérience unique!" />
      </v-col>
    </v-row>
  </main>
</template>
<script>
import SousTitres from "@/components/SousTitres.vue";
import lesCours from "@/data/PageAccueil/lesCours.json";

export default {
  data: () => ({
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
</style>
