<template>
  <header>
    <v-row class="contenuRow d-flex justify-space-between align-center sm-6">
      <!--------------LOGO----------------->

      <v-col class="logo" cols="auto"> <SiteLogo /> </v-col>
      <!-------------- MENU NAV GRAND ÉCRAN------------>
      <v-col class="blocMenu d-none d-md-flex" md="auto" lg="5">
        <v-list>
          <v-list-item v-for="(lien, index) in liensMenu" :key="index">
            <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
          </v-list-item></v-list
        >
      </v-col>
      <!--------------RECHERCHE INPUT----------------->
      <v-col class="d-none align-center d-md-flex" cols="auto" md="3">
        <!--<input class="inputRch" type="text" placeholder="Rechercher..." />
        <RouterLink to="/connexion"
          ><v-icon class="iconeCnx" icon @click="toggleDrawer">mdi-magnify</v-icon></RouterLink
        >-->
        <v-text-field
          class="d-none d-md-flex flex-column"
          label="Recherche..."
          type="text"
          clearable
          append-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <!--------------ICONES----------------->
      <v-col class="d-none d-md-flex" cols="auto">
        <RouterLink to="/boutique"
          ><v-icon class="iconePanier" icon @click="toggleDrawer">mdi-shopping</v-icon></RouterLink
        >
        <RouterLink to="/connexion"
          ><v-icon class="iconeCnx" icon @click="toggleDrawer">mdi-account</v-icon></RouterLink
        >
      </v-col>
      <!--------------BOUTON MENU-MOBILE/TABLETTE---------->
      <v-col cols="auto  d-md-none">
        <v-btn icon @click="toggleDrawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </header>
  <!--------------BLOC MENU-MOBILE----------->
  <v-col class="blocMenumobile d-md-none" cols="auto">
    <div class="menu-mobile" v-if="!MenuMobileActive">
      <input type="text" />

      <v-list v-for="(lien, index) in liensMenu" :key="index">
        <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
      </v-list>
    </div>
  </v-col>
</template>

<script>
import SiteLogo from "./SiteLogo.vue";

export default {
  data: () => ({
    liensMenu: [
      { nom: "Accueil", url: "/" },
      { nom: "Cours", url: "/cours" },
      { nom: "Services", url: "/services" },
      { nom: "Horaires et Tarifs", url: "/HoraireTarifs" },
      { nom: "Boutique", url: "/boutique" },
    ],
  }),
  methods: {
    toggleDrawer() {
      // Méthode pour basculer un tiroir de navigation ou un menu mobile
    },
  },
  components: { SiteLogo },
};
</script>
<style scoped>
header {
  width: 100vw;
  height: auto;
  background-color: #937fbc;
  padding: 0 5rem;
  z-index: 2;
  display: flex;
}
.contenuRow {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
}
/*//////////////////LOGO////////////////////*/

.logoSNA svg {
  fill: red;
}

/*/////////////// BLOC LIENS (GRAND ECRAN)//////////////////*/
.blockMenu {
  display: flex;
  flex-wrap: nowrap;
}
.v-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
}

/*----LIENS----*/

.v-list-item a {
  font-family: "Kotta One", sans-serif;

  color: var(--couleurTertiaire);
}
/*//////////////////RECHERCHE INPUT////////////////////*/

.inputRch {
  background-color: var(--couleurArriereplan);
  width: 100%;
  /*padding: 10px;*/
  border: none;
  border-radius: 20px;
  /*font-size: 1rem;*/
}
.v-text-field {
  width: 100%;
  position: relative;
  top: 10px;
}

.inputRch::placeholder {
  color: var(--couleurPrincipale);
}

.inputRch:hover {
  background-color: var(--couleurTertiaire);
}

/*//////////////////ICONES////////////////////*/
.v-icon {
  font-size: 2.5rem;
  color: var(--couleurTertiaire);
}

.iconePanier {
  padding-right: 50px;
}

/*----/////----------ZONE MOBILE-------////-----------*/

/*//////////////////BOUTON MENU-MOBILE/TABLETTE////////////////////*/
.v-btn {
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  z-index: 3;
}
.v-btn:hover {
  box-shadow: none;
}

/*//////////////////BLOC MENU MOBILE////////////////////*/

/*//////////////////RECHERCHE////////////////////*/

/*//////////////////LIENS MOBILE////////////////////*/
</style>
