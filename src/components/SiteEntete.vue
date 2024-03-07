<template>
  <header>
    <v-row no-gutters class="contenuRow">
      <!--------------LOGO----------------->

      <v-col cols="6" md="auto" class="logo"> <SiteLogo /> </v-col>
      <!-------------- MENU NAV GRAND ÉCRAN------------>
      <v-col cols="auto" lg="6" class="blocMenu d-none d-md-flex">
        <v-list>
          <v-list-item v-for="(lien, index) in liensMenu" :key="index">
            <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
          </v-list-item></v-list
        >
      </v-col>
      <v-col cols="4" class="d-flex">
        <!--------------RECHERCHE INPUT----------------->
        <v-col class="d-none align-center d-md-flex">
          <v-text-field
            class="d-none d-md-flex flex-column"
            label="Recherche..."
            type="text"
            clearable
            append-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
        <!--------------ICONES----------------->
        <v-col cols="auto" class="d-none d-md-flex">
          <RouterLink to="/boutique"
            ><v-col> <v-icon class="iconePanier" icon @click="toggleDrawer">mdi-shopping</v-icon></v-col></RouterLink
          >
          <RouterLink to="/connexion"
            ><v-col> <v-icon class="iconeCnx" icon @click="toggleDrawer">mdi-account</v-icon></v-col></RouterLink
          >
        </v-col></v-col
      >
      <!--------------BOUTON MENU-MOBILE/TABLETTE---------->
      <v-col class="menuBurger d-md-none">
        <v-btn icon @click="ouvreNav">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </header>
  <!--------------BLOC MENU-MOBILE----------->
  <div class="blocMenumobile d-md-none">
    <div class="menu-mobile" v-click-outside="ouvreNav" v-if="menuMobileActive">
      <!-- <v-text-field
        class="rchDeux"
        label="Recherche..."
        type="text"
        hide-details="auto"
        variant="outlined"
        clearable
        append-inner-icon="mdi-magnify"
      ></v-text-field>-->
      <input type="search" name="recherche" id="recherche" label="recherche" />

      <v-list v-for="(lien, index) in liensMenu" :key="index">
        <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
      </v-list>
      <div class="iconeMobile">
        <RouterLink to="/boutique"
          ><v-icon class="iconePanier" icon @click="toggleDrawer">mdi-shopping</v-icon>Panier</RouterLink
        >
        <RouterLink to="/connexion"
          ><v-icon class="iconeCnx" icon @click="toggleDrawer">mdi-account</v-icon>Connection</RouterLink
        >
      </div>
    </div>
  </div>
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
    menuMobileActive: false,
  }),
  methods: {
    ouvreNav() {
      this.menuMobileActive = !this.menuMobileActive;
    },
    onClickOutside() {
      this.active = false;
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
  padding: 0 3rem;
  z-index: 2;
  position: fixed;
}
.contenuRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  justify-content: space-around;
  width: 100%;
  background-color: transparent;
  overflow: hidden;
}

/*----LIENS----*/

.v-list-item a {
  font-family: "Kotta One", sans-serif;
  font-size: 1.3rem;
  color: var(--couleurTertiaire);
  border-bottom: transparent 2px solid;
}

.v-list-item a:hover {
  border-bottom: white 2px solid;
  transition: border-bottom 0.7s ease;
}
/*//////////////////RECHERCHE INPUT////////////////////*/

.v-text-field {
  position: relative;
  top: 10px;
}

/*//////////////////ICONES////////////////////*/
.v-icon {
  font-size: 2.5rem;
  color: var(--couleurTertiaire);
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
.blockMenuMobile {
  position: absolute;
  width: 70vw;
  right: 0;
}
.menu-mobile {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  padding: 5rem 0;
  background-color: white;
  border-left: #937fbc 5px solid;
  transition: 0.5s;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  z-index: 1;
}
/*//////////////////RECHERCHE////////////////////*/
input#recherche {
  background-color: rgba(0, 0, 0, 0.229);
  padding: 1rem;
  width: 60%;
  border: var(--couleurPrincipale) 1px solid;
  border-radius: 20px;
}

/*//////////////////LIENS MOBILE////////////////////*/
</style>
