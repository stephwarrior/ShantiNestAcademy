<template>
  <main>
    <v-parallax height="500px" src="https://hips.hearstapps.com/hmg-prod/images/10-minute-yoga-1668510425.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">YOGA</p>
      </div>

      <div class="iconeFlech">
        <v-btn icon large color="white">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
      <!--<v-img
        height="400px"
        src="https://d33wubrfki0l68.cloudfront.net/772616e178d1844bb45cc244ee42ad217b0d4a64/6b6cf/images/schedule_main.png"
      ></v-img>-->
    </v-parallax>
    <v-breadcrumbs :items="items" class="d-none align-center d-md-flex"></v-breadcrumbs>
    <v-container>
      <!--------------INTRO YOGA----------------->
      <SousTitres title="Qu'est-ce que le yoga?" />

      <v-window v-model="window" show-arrows>
        <v-window-item v-for="(item, index) in itemss" :key="index"
          ><v-row class="">
            <v-col class="">
              <p>
                {{ item.text }}
              </p>
            </v-col></v-row
          >
        </v-window-item>
      </v-window>

      <!----------------- COURS DE YOGA-------------->
      <SousTitres title="Cours de yoga" />
      <v-row>
        <v-col class="blocYogas" v-for="(yoga, index) in coursYoga" :key="index" cols="12" md="6" lg="4">
          <v-card>
            <v-img
              src="https://www.yogajournal.com/.image/t_share/MTU5MzYwNzIwNzIwMzYwNzIw/yj-2020-07-08-2.jpg"
              :width="200"
              aspect-ratio="1"
              >Zone Image</v-img
            >
            <v-card-title>{{ yoga.cours }}</v-card-title>
            <v-card-text>
              {{ yoga.textCourt }}
            </v-card-text>
            <v-card-actions>
              <v-btn @click="dialog = true" text color="pink">En savoir plus</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-dialog v-model="dialog" max-width="600px">
            <v-card>
              <v-card-title> Mon titre sera ici </v-card-title>
              <v-card-text> Mon texte sera ici </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Fermer</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>

      <!--------------CONSEILS----------------->
      <SousTitres title="Conseils de nos professionnels" />
      <v-row>
        <v-col v-for="(conseil, index) in cslYoga" :key="index" cols="12" md="6">
          <v-card>
            <v-card-title>{{ conseil.titre }}</v-card-title>
            <v-card-text>{{ conseil.texte }}</v-card-text>
          </v-card></v-col
        >
      </v-row>

      <!--------------NUTRITIONS----------------->
      <SousTitres title="Nutrition" />
    </v-container>
  </main>
</template>
<script>
import SousTitres from "@/components/SousTitres.vue";
export default {
  data: () => ({
    items: [
      {
        title: "Accueil",
        desactive: false,
        href: "/",
      },
      {
        title: "Cours de Yoga",
        desactive: true,
      },
    ],
    itemss: [
      {
        title: "Slide 1",
        text: " Le yoga est une discipline qui associe le corps et l'esprit. Il s'agit d'une pratique physique qui permet de travailler la souplesse et la force musculaire. Le yoga est également une pratique spirituelle qui permet de se recentrer sur soi-même et de se relaxer.",
      },
      { title: "Slide 2", text: "le yoga  " },
      { title: "Slide 3", text: "Ce texte est pour le troisième slide." },
      // Ajoutez autant de slides que vous le souhaitez
    ],
    coursYoga: [
      {
        cours: "Ashtanga Yoga ",
        textCourt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://www.yogajournal.com/.image/t_share/MTU5MzYwNzIwNzIwMzYwNzIw/yj-2020-07-08-2.jpg",
      },
      {
        cours: "Iyengar Yoga",
        textCourt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://www.yogajournal.com/.image/t_share/MTU5MzYwNzIwNzIwMzYwNzIw/yj-2020-07-08-2.jpg",
      },
      {
        cours: "Bikram Yoga",
        textCourt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://www.yogajournal.com/.image/t_share/MTU5MzYwNzIwNzIwMzYwNzIw/yj-2020-07-08-2.jpg",
      },
      {
        cours: "Yin Yoga",
        textCourt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://www.yogajournal.com/.image/t_share/MTU5MzYwNzIwNzIwMzYwNzIw/yj-2020-07-08-2.jpg",
      },
      {
        cours: "Restorative Yoga",
        textCourt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://www.yogajournal.com/.image/t_share/MTU5MzYwNzIwNzIwMzYwNzIw/yj-2020-07-08-2.jpg",
      },
      {
        cours: "Thérapie Yoga",
        textCourt:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "https://www.yogajournal.com/.image/t_share/MTU5MzYwNzIwNzIwMzYwNzIw/yj-2020-07-08-2.jpg",
      },
    ],
    cslYoga: [
      {
        titre: "Respectez Votre Corps",
        texte:
          "Écoutez votre corps et respectez ses limites. Ne forcez jamais dans une posture au point de ressentir de la douleur. La pratique du yoga est personnelle et doit être adaptée à votre propre corps.",
      },
      {
        titre: "Pratiquez Régulièrement",
        texte:
          "La clé pour bénéficier pleinement du yoga est la régularité. Même quelques minutes par jour peuvent avoir un impact positif. Essayez de créer une routine quotidienne pour intégrer le yoga dans votre vie.",
      },
      {
        titre: "Concentrez-vous sur la Respiration",
        texte:
          "La respiration est centrale dans la pratique du yoga. Concentrez-vous sur des respirations profondes et contrôlées pour améliorer votre concentration, détendre votre corps et approfondir votre pratique.",
      },
      {
        titre: "Créez un Espace Dédié",
        texte:
          "Si possible, aménagez un espace tranquille et confortable chez vous pour pratiquer. Un environnement paisible peut aider à renforcer votre concentration et à créer une routine régulière.",
      },
      {
        titre: "Ne Comparez Pas",
        texte:
          "Évitez de vous comparer aux autres. Chaque personne est unique dans sa pratique du yoga. Concentrez-vous sur votre propre progression et non sur la manière dont votre pratique se compare à celle des autres.",
      },
      {
        titre: "Intégrez la Méditation",
        texte:
          "Essayez d'incorporer la méditation et la pleine conscience dans votre pratique. Même quelques minutes de méditation peuvent améliorer significativement votre bien-être mental et émotionnel.",
      },
    ],
    length: 3,
    window: 0,
    dialog: false,
  }),
  components: {
    SousTitres,
  },
};
</script>
<style scoped>
main {
  padding: 0;
  color: var(--couleurQuaternaire);
}
.v-parallax {
  height: 800px !important;
}
/*////////////LE YOGA CEST QUOI//////////////*/  
.leSt{
  color: var(--couleurQuaternaire) !important;
}
.v-window-item {
  padding: 5rem;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.4rem;
}

.v-btn {
  background-color: none;
}

/*/ ///////////COURS DE YOGA//////////////*/
.blocYogas {
  margin-bottom: 2rem;
}

/*////////////CONSEILS//////////////*/

/*/ ///////////NUTRITIONS//////////////*/
</style>
