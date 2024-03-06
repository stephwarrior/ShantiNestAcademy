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
      <div class="aPropos">
        <VariableGlobal />
        <div>
          <div>
            <v-img :src="aPropos.img" aspect-ratio="1.4" class="grey lighten-2"></v-img>
          </div>
          <p>{{ aPropos.description }}</p>
        </div>
      </div>
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
          "Bienvenue à ShantiNest Academy, un sanctuaire de bien-être et d'apprentissage où chaque souffle et mouvement vous rapproche de votre moi intérieur. Fondée sur les principes de paix, d'harmonie et de croissance personnelle, notre académie est plus qu'un simple centre de yoga, de pilates et de méditation; c'est une communauté où les individus de tous horizons se rejoignent pour explorer, apprendre et se transformerAu cœur de ShantiNest Academy se trouve notre conviction profonde que le bien-être est un voyage holistique. Nous avons soigneusement conçu un environnement où chaque aspect de vous-même peut être nourri et revitalisé. Nos espaces, baignés de lumière naturelle et conçus avec des matériaux écologiques, sont des havres de paix qui invitent à la relaxation et à la réflexion dès l'instant où vous franchissez nos portes.Notre offre de cours est aussi variée que nos membres. Du yoga dynamique Vinyasa pour ceux qui cherchent à renforcer leur corps et leur esprit, au Pilates, concentré sur la tonification et l'équilibrage musculaire, en passant par des séances de méditation profonde pour ceux qui aspirent à une paix intérieure. Chaque classe est une invitation à explorer les limites de votre corps et à étendre les frontières de votre esprit.Mais ShantiNest Academy, c'est bien plus que des cours. C'est un lieu d'apprentissage continu où nous proposons des ateliers spécialisés, des retraites et des formations de professeur, tous dirigés par des instructeurs passionnés et expérimentés. Notre objectif est de fournir des outils et des connaissances qui vous permettront d'intégrer les pratiques de bien-être dans chaque aspect de votre vie.La communauté ShantiNest est au cœur de notre mission. Nous croyons fermement à la force de la communauté pour inspirer, encourager et soutenir. C'est pourquoi nous avons créé un espace où les membres peuvent se rencontrer, partager et grandir ensemble. Que ce soit à travers des événements communautaires, des séances de partage ou simplement en prenant un thé ensemble après une classe, nous cherchons à tisser des liens forts entre nos membres.L'engagement de ShantiNest Academy envers le développement durable est aussi profond que notre passion pour le bien-être. Nous adoptons des pratiques respectueuses de l'environnement dans tous les aspects de notre fonctionnement, de l'utilisation d'énergies renouvelables à la fourniture de produits locaux et écologiques dans notre café.Rejoindre ShantiNest Academy, c'est choisir de faire un pas vers une vie plus équilibrée, saine et consciente. Que vous soyez débutant ou avancé dans votre pratique, vous trouverez chez ShantiNest un espace pour évoluer à votre rythme, guidé par des professionnels bienveillants et une communauté soutenante.Nous vous invitons à découvrir ShantiNest Academy et à commencer votre voyage de transformation personnelle. Venez explorer ce que signifie vivre en harmonie avec soi-même et avec le monde autour de nous. Bienvenue dans notre famille. Bienvenue à ShantiNest Academy.",
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
