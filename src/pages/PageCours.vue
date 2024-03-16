<template>
  <main>
    <v-parallax class="" height="400px" sm="4" :src="imgCours">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">Cours</p>
      </div>
    </v-parallax>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-row class="zoneCours">
      <SousTitres title="Nos cours" />

      <v-row class="nosCours">
        <v-col cols="12" sm="6">
          <p>{{ texteCours }}</p>
        </v-col>
        <v-col cols="12" sm="6" lg="4">
          <v-img :src="imgEquipe" class="imgAp"></v-img>
        </v-col>
      </v-row>

      <v-col cols="12" class="d-flex flex-column">
        <v-col sm="" md="4"><v-img class="" :src="imgCourss"> </v-img></v-col>
        <v-col s md="8"> </v-col>
      </v-col>
      <v-col cols="12">
        <SousTitres title="Quoi amener?" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </v-col>
      <v-col cols="12">
        <SousTitres title="Une expérience unique!" />
      </v-col>
    </v-row>
  </main>
</template>
<script>
import SousTitres from "@/components/SousTitres.vue";

export default {
  data: () => ({
    /////////////////////ZONE TEXTE////////////////////////////
    texteCours:
      "Notre académie offre une sélection diversifiée de cours, conçus pour répondre aux besoins de chacun, que vous soyez débutant ou avancé. De l'énergisant yoga, qui renforce le corps et apaise l'esprit, au pilates, parfait pour sculpter votre silhouette et améliorer votre posture, en passant par la méditaion qui invite à la réflexion intérieure et à la sérénité, nos cours sont animés par des instructeurs passionnés et expérimentés. Chaque discipline est enseignée dans le respect des capacités individuelles,permettant à tous de progresser à leur rythme, dans un environnement accueillant et bienveillant. ShantiNest Academy est plus qu'un simple lieu d'apprentissage ; c'est une communauté où grandir ensemble, partager etdécouvrir son potentiel illimité. Nous vous invitons à explorer notre offre de cours et à trouver le chemin qui résonne le plus avec vous. Rejoignez-nous pour débuter votre voyage vers une meilleure version de vous-même. Bienvenue à la maison, bienvenue à ShantiNest Academy.",
    ////////////////////////////////////////
    imgCours: require("@/img/general/sna06.jpeg"),
    imgCourss: require("@/img/general/sna12.jpeg"),
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
</style>
