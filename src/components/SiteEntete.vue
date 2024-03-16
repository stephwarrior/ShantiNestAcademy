<template>
  <header :style="{ backgroundColor: bgColor }">
    <!-------------------------ZONE GRAND ECRAN-------------------->

    <v-row no-gutters class="contenuRow align-center">
      <!--------------LOGO----------------->
      <v-col cols="auto" class="d-none d-md-flex">
        <SiteLogo taille="2.7rem" />
      </v-col>
      <!-------------- MENU NAV GRAND ÉCRAN------------>
      <v-col cols="auto" lg="7" class="blocMenu d-none d-md-flex">
        <v-list>
          <v-list-item v-for="(lien, index) in liensMenu" :key="index">
            <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
          </v-list-item></v-list
        >
      </v-col>
      <v-col cols="auto" class="d-flex">
        <!--------------ICONES----------------->
        <v-col cols="auto" class="d-none d-md-flex">
          <RouterLink to="/boutique"
            ><v-col>
              <v-badge :content="nombreArticles" color="error"
                ><v-icon class="iconePanier" @click="montrerPanier" icon>mdi-shopping</v-icon></v-badge
              ></v-col
            ></RouterLink
          >
          <RouterLink to="/connexion"
            ><v-col> <v-icon class="iconeCnx" icon>mdi-account</v-icon></v-col></RouterLink
          >
        </v-col>
      </v-col>
    </v-row>
    <!-------------------------ZONE MOBILE/TABLETTE-------------------->

    <!--Header mobile/tablette-->
    <div class="enteteMobTab d-md-none">
      <SiteLogo taille="2rem" />
      <p class="titreLogo d-md-none">ShantiNest Academy</p>

      <!--Icones mobile/tablette-->
      <v-badge :content="nombreArticles"
        ><v-icon @click="montrerPanier" class="iconePanier" icon>mdi-shopping</v-icon></v-badge
      ><RouterLink to="/connexion">
        <v-badge color="default" dot><v-icon class="iconeCnx" icon>mdi-account</v-icon></v-badge></RouterLink
      >
      <!--Bouton burger mobile/tablette-->
      <div class="menuBurger">
        <v-btn icon>
          <v-icon @click="ouvreNav" v-if="!menuMobileActive">mdi-menu</v-icon>
          <v-icon v-else>mdi-close</v-icon>
        </v-btn>
      </div>
    </div>
  </header>
  <!--Navigation mobile/tablette-->
  <div class="blocMenumobile d-md-none">
    <div class="menu-mobile" v-click-outside="ouvreNav" v-if="menuMobileActive">
      <!--Barre de recherche-->
      <!--<input type="search" name="recherche" id="recherche" label="recherche" />-->
      <!--Les menus mobile/tablette-->
      <v-list v-for="(lien, index) in liensMenu" :key="index">
        <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
      </v-list>
    </div>
  </div>
</template>

<script>
import SiteLogo from "./SiteLogo.vue";
import { mapGetters } from "vuex";

export default {
  emits: ["afficheLePanier"],
  props: {
    bgColor: {
      type: String,
      default: "#FFFFFF", // Default color is white
    },
  },
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
    montrerPanier() {
      this.$emit("afficheLePanier");
    },
  },
  computed: {
    ...mapGetters(["nombreArticles"]),
  },

  components: { SiteLogo },
};
</script>
<style scoped>
header {
  width: 100vw;
  background-color: #937fbc;
  z-index: 10;
  position: fixed;
}

/*//////////////////LOGO////////////////////*/

.enteteMobTab {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.titreLogo {
  font-family: "Kotta One", sans-serif;
  color: var(--couleurTertiaire);
  margin-left: 1rem;
}
/*----/////----------ZONE MOBILE-------////-----------*/

/*////////BOUTON MENU-MOBILE/TABLETTE//////*/
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

/*//////////////////ICONES////////////////////*/
.v-icon {
  color: var(--couleurTertiaire);
}
/*//////////////////LIENS MOBILE////////////////////*/

/*----/////----------ZONE TABLETTE-------////-----------*/
@media (min-width: 768px) {
  /*//////////////////ICONES////////////////////*/
  .v-icon {
    font-size: 2rem;
  }
}
/*----/////----------ZONE GRAND ECRAN-------////-----------*/
@media (min-width: 960px) {
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
  .contenuRow {
    height: 7vh;
    display: flex;
    justify-content: space-around;
    align-content: center;
  }
  /*----LIENS----*/

  .v-list-item a {
    font-family: "Kotta One", sans-serif;
    color: var(--couleurTertiaire);
    border-bottom: transparent 2px solid;
  }

  .v-list-item a:hover {
    border-bottom: white 2px solid;
    transition: border-bottom 0.7s ease;
  }

  /*//////////////////ICONES////////////////////*/
}
</style>
