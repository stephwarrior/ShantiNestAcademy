<template>
  <main>
    <v-parallax
      height="800px"
      sm="4"
      src="https://media.cntraveler.com/photos/5be07adbcfd2bb17f97a7a52/16:9/w_3199,h_1799,c_limit/MAG18_DEC_TR120818_SG_Flores02.jpg"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">Bienvenue à ShantiNest Academy</p>
      </div>
      <!--<v-img
        height="400px"
        src="https://d33wubrfki0l68.cloudfront.net/772616e178d1844bb45cc244ee42ad217b0d4a64/6b6cf/images/schedule_main.png"
      ></v-img>-->
    </v-parallax>
    <v-container>
      <VariableGlobal />
      <v-row class="aPropos">
        <v-col cols="auto" sm="12" md="5" class="glee">
          <v-img :src="aPropos.img" class="grey lighten-2"></v-img>
        </v-col>
        <v-col cols="auto" sm="auto" md="5">
          <p>{{ aPropos.description }}</p>
        </v-col>
      </v-row>
      <div class="equipes">
        <h1>Notre Équipe</h1>
        <p>
          Au cœur de ShantiNest Academy se trouve une équipe unie par une passion commune pour le bien-être et
          l'épanouissement personnel. Notre groupe d'experts dévoués en yoga, pilates et méditation partage un objectif
          : vous accompagner vers une meilleure version de vous-même.
        </p>
        <v-row v-for="(employee, index) in lesEmployees" :key="index">
          <v-card class="mx-auto" max-width="200">
            <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

            <v-card-title>{{ employee.nom }} </v-card-title>

            <v-card-subtitle> {{ employee.poste }} </v-card-subtitle>
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
        </v-row>
      </div>
      <div class="lesCours">
        <h1>Nos cours</h1>
        <v-container>
          <v-row v-for="(cours, index) in lesCours" :key="index">
            <v-card class="d-flex flex-row mx-auto" width="500px">
              <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover>{{
                cours.cours
              }}</v-img>

              <v-expand-transition>
                <v-card v-if="reveal" class="v-card--reveal">
                  <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">Origin</p>
                    <p>
                      late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin
                      eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
                    </p>
                  </v-card-text>
                </v-card>
              </v-expand-transition>
            </v-card>
          </v-row>
        </v-container>
      </div>
      <div class="temoignage">
        <h1>Témoignages</h1>
        <v-carousel hide-delimiters>
          <v-carousel-item cover v-for="(commentaire, index) in commentaires" :key="index">
            <v-col cols="auto" height="500px">
              <v-card
                prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
                class="mx-auto"
                max-width="340px"
                max-height="500px"
                title="Daniel Dae Kim"
                subtitle="Membre SNA depuis 2012"
              >
                <v-rating v-model="rating" active-color="#644a9d" color="grey" readonly=""></v-rating>
                <v-card-subtitle class="text-h6">{{ commentaire.sousTitre }}</v-card-subtitle>
                <v-card-text>{{ commentaire.comm }}</v-card-text>
              </v-card>
            </v-col>
          </v-carousel-item>
        </v-carousel>
      </div>
    </v-container>
  </main>
</template>
<script>
//import UnCarousel from "../components/UnCarousel.vue";
import VariableGlobal from "@/components/VariableGlobal.vue";

export default {
  data() {
    return {
      rating: 4,
      lesEmployees: [
        {
          imageUrl: " ",
          nom: "Émilie Leblanc",
          poste: "Professeur de yoga",
        },
        {
          imageUrl: "",
          nom: "Tom Jédusor",
          poste: "Professeur de méditation",
        },
      ],
      aPropos: {
        img: "https://unpasverssoi.ca/fr/wp-content/uploads/2018/04/salle-cours-yoga.jpg",
        description:
          "Bienvenue à ShantiNest Academy, un sanctuaire de bien-être et d'apprentissage où chaque souffle et mouvement vous rapproche de votre moi intérieur. Fondée sur les principes de paix, d'harmonie et de croissance personnelle, notre académie est plus qu'un simple centre de yoga, de pilates et de méditation; c'est une communauté où les individus de tous horizons se rejoignent pour explorer, apprendre et se transformerAu cœur de ShantiNest Academy se trouve notre conviction profonde que le bien-être est un voyage holistique.Nous avons soigneusement conçu un environnement où chaque aspect de vous-même peut être nourri et revitalisé. Nos espaces, baignés de lumière naturelle et conçus avec des matériaux écologiques, sont des havres de paix qui invitent à la relaxation et à la réflexion dès l'instant où vous franchissez nos portes.Notre offre de cours est aussi variée que nos membres. Du yoga dynamique Vinyasa pour ceux qui cherchent à renforcer leur corps et leur esprit, au Pilates, concentré sur la tonification et l'équilibrage musculaire, en passant par des séances de méditation profonde pour ceux qui aspirent à une paix intérieure. Chaque classe est une invitation à explorer les limites de votre corps et à étendre les frontières de votre esprit.Mais ShantiNest Academy, c'est bien plus que des cours.  ",
      },
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
      ],
      reveal: false,
    };
  },
  components: {
    VariableGlobal,
  },
};
</script>
<style scoped>
main {
  padding: 0;
  height: auto;
}

/*//////////////////A PROPOS////////////////////*/

.aPropos {
  justify-content: space-around;
  padding: 5rem;
}


/*/ /////////////////EQUIPES////////////////////*/

/*//////////////////LES COURS////////////////////*/


/*/ /////////////////TEMPOIGNAGES////////////////////*/

/*--------------CAROUSEL--------*/

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
.temoignage-carousel .v-carousel__controls {
  align-items: center;
}

.temoignage-carousel .v-carousel__controls .v-btn {
  background-color: #644a9d;
}
.temoignage-carousel .v-carousel__item {
  height: 200px;
}
</style>
