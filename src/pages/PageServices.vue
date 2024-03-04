<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-container>
      <v-row v-for="(service, index) in services" :key="index"
        ><v-col cols="12" md="4">
          <v-img :src="service.img" aspect-ratio="1.4" class="grey lighten-2"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <h1>{{ service.name }}</h1>
          <p>{{ service.descriptionCourt }}</p>
          <v-btn color="primary" @click="ouvreDialogue(service)">Voir plus</v-btn>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>{{ itemSelectionner.name }}</v-card-title>
          <v-card-text>{{ itemSelectionner.descriptionLong }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">Fermer</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </main>
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          img: "https://unpasverssoi.ca/fr/wp-content/uploads/2018/04/salle-cours-yoga.jpg",
          name: "Location des salles",
          descriptionCourt:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
          descriptionLong:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
        },
        {
          img: "https://sautoformer.fr/wp-content/uploads/2019/04/formation-professeur-yoga.jpg",
          name: "Formation des cours",
          descriptionCourt:
            "Lorem ipsumAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
          descriptionLong:
            "voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
        },
        {
          img: "https://sautoformer.fr/wp-content/uploads/2019/04/formation-professeur-yoga.jpg",
          name: "Carrière",
          descriptionCourt: "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditi praesentium.",
          descriptionLong:
            "Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et qua non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
        },
      ],
      dialog: false,
      itemSelectionner: null,
      items: [
        {
          title: "Accueil",
          desactive: false,
          href: "/",
        },
        {
          title: "Services",
          desactive: true,
        },
      ],
    };
  },
  methods: {
    ouvreDialogue(item) {
      this.itemSelectionner = item;
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
main {
  height: auto;
}
.blocService {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
h3 {
  color: white;
  margin: 0;
  padding: 20px;
}
img {
  width: 50vw;
  height: 100%;
}
</style>
