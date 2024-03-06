<!--<template>
  <header class="header">
    <v-container class="navbar">
      <SiteLogo />
      <div class="navbar-menu d-none d-md-flex">
        <ul class="blocLiensMenu">
          <li v-for="(lien, index) in liensMenu" :key="index">
            <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
          </li>
        </ul>
      </div>
      <v-container class="d-flex">
        <v-text-field
          class="d-none d-md-flex flex-column"
          label="Recherche..."
          type="text"
          variant="outlined"
          clearable
        ></v-text-field>
        <v-btn class="iconeRch" @click="toggleMenu">
          <v-icon>mdi-menu</v-icon>
        </v-btn></v-container
      >
      <v-btn class="iconePanier" @click="toggleMenu">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-btn class="iconeCnx" @click="toggleMenu">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      ------------------------------------Version Mobile--------------------------
      <v-btn class="navbar-toggler d-md-none" @click="toggleMenu">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div class="menu-mobile d-md-none" v-if="!MenuMobileActive">
        <input type="text" />
        <ul>
          <v-list v-for="(lien, index) in liensMenu" :key="index">
            <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
          </v-list>
        </ul>
      </div>
    </v-container>
  </header>
</template>
<script>
import SiteLogo from "./SiteLogo.vue";
export default {
  data() {
    return {
      MenuMobileActive: true,
      MenuDesktopActive: false,
      liensMenu: [
        { nom: "Accueil", url: "/" },
        { nom: "Cours", url: "/cours" },
        { nom: "Services", url: "/services" },
        { nom: "Horaires et Tarifs", url: "/HoraireTarifs" },
        { nom: "Boutique", url: "/boutique" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.MenuMobileActive = !this.MenuMobileActive;
    },
    checkTailleEcran() {
      this.MenuDesktopActive = window.innerWidth > 768;
    },
  },
  components: { SiteLogo },
};
</script>
<style scoped>
.header {
  width: 100vw;
  background-color: #937fbc;
  z-index: 2;
  position: fixed;

  padding: 0.5rem 0;
}
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 10px 0;
  margin: 0;
}
.v-container {
  max-width: 80vw;
  
}
.logoSNA > svg {
  width: 30px;
  z-index: 5;
}
.blocLiensMenu {
  list-style: none;
  padding: 0;
  display: flex;
}
.blocLiensMenu li {
  margin: 0 30px;
}
.blocLiensMenu li > a {
  color: var(--couleurTertiaire);

  transition: 0.3s;
}
.blocLiensMenu li > a,
.menu-mobile ul li a {
  font-family: "Kotta One", sans-serif;
}

.menu-mobile {
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  width: 70vw;
  height: 100vh;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
}

.menu-mobile input {
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  color: black;
}
.menu-mobile ul {
  list-style: none;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  flex-direction: column;
}
.menu-mobile ul li {
  margin: 20px 0;
}
.menu-mobile ul li a {
  font-size: clamp(0.1rem, -0.2581rem + 8.3871vw, 2.5rem);
}

.header .navbar-toggler {
  background: none;
  border: none;
  z-index: 3;
}

.navbar-toggler-fixe {
  position: fixed;
  color: white;
  top: 10px;
  right: 10px;
  z-index: 3;
}
button.navbar-toggler {
  color: white;
}
.navbar-menu {
  display: none;
}

.header .navbar-menu {
  display: block;
}
.cls-1 {
  fill: white;
}
</style>

-------------ICONE RECHERCHE----------------
        <v-col class="d-none d-md-flex" cols="auto">
          <v-btn class="iconeRch" icon @click="toggleDrawer">
            <v-icon></v-icon>
          </v-btn>
        </v-col>
-->
<!-- HeaderComponent.vue -->
<template>
  <header>
    <v-row class="d-flex justify-space-between align-center sm-6">
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
.v-row {
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
