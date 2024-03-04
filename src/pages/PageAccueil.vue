<template>
  <main>
    <v-parallax height="500px" sm="4" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">Bienvenue à ShantiNest Academy</p>
      </div>
    </v-parallax>
    <v-container>
      <div class="aPropos">
        <v-row v-for="(introduction, index) in aPropos" :key="index">
          <h1>{{ introduction.titre }}</h1>
          <v-col cols="12" md="8">
            <v-col cols="12" md="4">
              <v-img :src="introduction.img" aspect-ratio="1.4" class="grey lighten-2"></v-img>
            </v-col>
            <p>{{ introduction.description }}</p>
          </v-col>
        </v-row>
      </div>
      <div class="equipes">
        <h1>Notre Équipe</h1>
        <p>
          Au cœur de ShantiNest Academy se trouve une équipe unie par une passion commune pour le bien-être et
          l'épanouissement personnel. Notre groupe d'experts dévoués en yoga, pilates et méditation partage un objectif
          : vous accompagner vers une meilleure version de vous-même.
        </p>
        <v-card class="mx-auto" max-width="200">
          <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

          <v-card-title> Émilie Leblanc </v-card-title>

          <v-card-subtitle> Professeur de yoga </v-card-subtitle>
          <v-card-actions>
            <v-btn color="teal-accent-4" variant="text" @click="reveal = true"> Voir plus </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
              <v-card-text class="pb-0">
                <p class="text-h4 text--primary">Origin</p>
                <p>
                  late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin
                  eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                </p>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn color="teal-accent-4" variant="text" @click="reveal = false"> Fermer </v-btn>
              </v-card-actions>
            </v-card>
          </v-expand-transition>
        </v-card>
      </div>
      <div class="lesCours">
        <h1>Nos cours</h1>
        <v-container
          ><v-card v-for="(cours, index) in lesCours" :key="index" class="d-flex flex-row mx-auto" max-width="250">
            <v-img height="400px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover>{{
              cours.cours
            }}</v-img>

            <v-expand-transition>
              <v-card v-if="reveal" class="v-card--reveal" style="height: 100%">
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">Origin</p>
                  <p>
                    late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin
                    eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                  </p>
                </v-card-text>
              </v-card>
            </v-expand-transition>
          </v-card></v-container
        >
      </div>
      <div class="temoignage">
        <h1>Témoignages</h1>
        <v-col v-for="(commentaire, index) in commentaires" :key="index" cols="auto">
          <v-card
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            class="mx-auto"
            max-width="344"
            title="Daniel Dae Kim"
            subtitle="Daebakida Shinshalo!"
          >
            <v-rating v-model="rating" active-color="#644a9d" color="grey"></v-rating>
            <v-card-subtitle class="text-h6">{{ commentaire.sousTitre }}</v-card-subtitle>
            <v-card-text>{{ commentaire.comm }}</v-card-text>
          </v-card>
        </v-col>
      </div>
    </v-container>
  </main>
</template>
<script>
//import UnCarousel from "../components/UnCarousel.vue";

export default {
  data() {
    return {
      rating: 4,
      elements: [
        {
          imageUrl: " ",
          employee: "Émilie Leblanc",
          poste: "Professeur de yoga",
        },
        {
          imageUrl: "",
          employee: "Tom Jédusor",
          poste: "Professeur de méditation",
        },
        // Ajoutez autant d'éléments que vous le souhaitez
      ],
      aPropos: [
        {
          titre: "À propos",
          img: "https://unpasverssoi.ca/fr/wp-content/uploads/2018/04/salle-cours-yoga.jpg",
          description: "loremp ipsum",
        },
      ],
      lesCours: [
        {
          cours: "Yoga",
          img: "https://unpasverssoi.ca/fr/wp-content/uploads/2018/04/salle-cours-yoga.jpg",
        },
        {
          cours: "Pilates",
          img: "https://unpasverssoi.ca/fr/wp-content/uploads/2018/04/salle-cours-yoga.jpg",
        },
        {
          cours: "Méditation",
          img: "https://unpasverssoi.ca/fr/wp-content/uploads/2018/04/salle-cours-yoga.jpg",
        },
      ],
      commentaires: [
        {
          imageUrl: " ",
          nom: "Daniel Dae Kim",
          sousTitre: "Daebakida Shinsha!",
          comm: " Depuis que j'ai commencé les cours de yoga chez ShantiNest Academy, ma vie a changé de manière incroyable.Je me sens plus équilibré, plus calme, et en meilleure santé. Les instructeurs sont incroyablement compétents et attentionnés.",
        },
        {
          imageUrl: "",
          nom: "Tom Jédusor",
          sousTitre: " Wow!",
          comm: "best of the best",
        },
        // Ajoutez autant d'éléments que vous le souhaitez
      ],
      reveal: false,
    };
  },
};
</script>
<style scoped>
main {
  padding: 5rem 0;
  height: auto;
}
.v-container {
  width: 100vw;
}
.v-parallax {
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.temoignage {
  display: flex;
  flex-direction: column;
}
</style>
