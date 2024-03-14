<template>
  <main>
    <v-parallax class="d-md-none" height="100px" sm="4" :src="imgCours">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">Cours</p>
      </div>
    </v-parallax>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-row class="zoneCours">
      <v-col cols="12">
        <SousTitres title="Nos cours" />

        <v-img class="" :src="imgCourss"> </v-img>
        <p>
          Notre académie offre une sélection diversifiée de cours, conçus pour répondre aux besoins de chacun, que vous
          soyez débutant ou avancé. De l'énergisant <RouterLink to="/yoga"><span color="pink">yoga</span></RouterLink
          >, qui renforce le corps et apaise l'esprit, au
          <RouterLink to="/pilates"><span color="pink">pilates</span></RouterLink
          >, parfait pour sculpter votre silhouette et améliorer votre posture, en passant par la
          <RouterLink to="/meditation"><span color="pink">méditaion</span></RouterLink
          >, qui invite à la réflexion intérieure et à la sérénité, nos cours sont animés par des instructeurs
          passionnés et expérimentés. Chaque discipline est enseignée dans le respect des capacités individuelles,
          permettant à tous de progresser à leur rythme, dans un environnement accueillant et bienveillant. ShantiNest
          Academy est plus qu'un simple lieu d'apprentissage ; c'est une communauté où grandir ensemble, partager et
          découvrir son potentiel illimité. Nous vous invitons à explorer notre offre de cours et à trouver le chemin
          qui résonne le plus avec vous. Rejoignez-nous pour débuter votre voyage vers une meilleure version de
          vous-même. Bienvenue à la maison, bienvenue à ShantiNest Academy.
        </p>
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
main {
}
.zoneCours {
  padding: 0 2rem;
  text-align: center;
}
</style>
