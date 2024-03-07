<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-container>
      <div class="nbrItems">
        <div>{{ lesItems.length }} items</div>
        <div></div>
      </div>

      <v-row class="test">
        <v-col cols="12" md="4" v-for="(item, index) in lesItems" :key="index">
          <v-card class="blocItems">
            <v-img :src="item.img" alt="pas image">zone image</v-img>
            <p>{{ item.nom }}</p>
            <p>${{ item.prix }}.00 CAD</p>
            <v-btn>Ajouter au panier</v-btn>
          </v-card></v-col
        ></v-row
      ></v-container
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
main {
  padding: 4rem 0;
  height: auto;
}
.v-container {
  padding: 0 7rem;
}
.nbrItems {
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
}
.blocItems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-shadow: none;
}
.blocItems > * {
  margin: 0.3rem 0;
}
.blocItems .v-img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border: 1px solid black;
}
.blocItems .v-btn {
  width: 100%;
  font-size: 0.7rem;
}
.test {
  display: flex;
  justify-content: space-around;
}

/*//////////////////Tablette////////////////////*/
@media (min-width: 960px) {
  main {
    padding: 7rem 0;
  }
  .v-container {
    padding: 0;
  }
  .blocItems {
    padding: 4rem;
  }
}
</style>
