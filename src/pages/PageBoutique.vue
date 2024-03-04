<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-container class="d-flex justify-space-evenly">
      <div>{{ lesItems.length }} items</div>
      <div>filtrer par</div>
    </v-container>

    <v-container class="test">
      <v-card v-for="(item, index) in lesItems" :key="index" class="blocItems">
        <v-img :src="item.img" alt="pas image">zone image</v-img>
        <p>{{ item.nom }}</p>
        <p>${{ item.prix }}.00 CAD</p>
        <v-btn>Ajouter au panier</v-btn>
      </v-card></v-container
    >
  </main>
</template>
<script>
export default {
  name: "PageBoutique",
  data() {
    return {
      lesItems: [
        {
          nom: "Goblet SNA",
          prix: 50,
          img: "",
        },
        { nom: "Chandail SNA", prix: 10, img: "" },
        { nom: "Bouteille SNA", prix: 15, img: "" },
        { nom: "Tapis SNA", prix: 20, img: "" },
        { nom: "Tasse SNA", prix: 10, img: "" },
        { nom: "Sac SNA", prix: 25, img: "" },
        { nom: "Bandeau SNA", prix: 5, img: "" },
        { nom: "Bouteille SNA", prix: 15, img: "" },
      ],
      items: [
        {
          title: "Accueil",
          desactive: false,
          href: "/",
        },
        {
          title: "Boutique",
          desactive: true,
        },
      ],
    };
  },
  components: {},
};
</script>
<style scoped>
.blocItems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.test {
  display: flex;
  justify-content: space-around;
}
</style>
