<template>
  <main>
    <v-img class="" src="https://hips.hearstapps.com/hmg-prod/images/10-minute-yoga-1668510425.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">Nos Cours</p>
      </div>
    </v-img>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-row>
      <v-col cols="12">
        <h1>Nos cours</h1>
        <p>
          Notre académie offre une sélection diversifiée de cours, conçus pour répondre aux besoins de chacun, que vous
          soyez débutant ou avancé. De l'énergisant Yoga, qui renforce le corps et apaise l'esprit, au Pilates, parfait
          pour sculpter votre silhouette et améliorer votre posture, en passant par la Méditation, qui invite à la
          réflexion intérieure et à la sérénité, nos cours sont animés par des instructeurs passionnés et expérimentés.
          Chaque discipline est enseignée dans le respect des capacités individuelles, permettant à tous de progresser à
          leur rythme, dans un environnement accueillant et bienveillant. ShantiNest Academy est plus qu'un simple lieu
          d'apprentissage ; c'est une communauté où grandir ensemble, partager et découvrir son potentiel illimité. Nous
          vous invitons à explorer notre offre de cours et à trouver le chemin qui résonne le plus avec vous.
          Rejoignez-nous pour débuter votre voyage vers une meilleure version de vous-même. Bienvenue à la maison,
          bienvenue à ShantiNest Academy.
        </p>
      </v-col>
      <v-col cols="12">
        <h1>Quoi amené?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </v-col>
      <v-col cols="12">
        <h1>Une expérience unique</h1>
      </v-col>
    </v-row>
  </main>
</template>
<script>
export default {
  data: () => ({
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
};
</script>
<style scoped>
main {
}
</style>
