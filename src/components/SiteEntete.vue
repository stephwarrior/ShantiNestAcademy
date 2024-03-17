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
          <v-list-item
            v-for="(lien, index) in liensMenu"
            :key="index"
            class="menu-item"
            @mouseenter="isSubMenuVisible = true"
            @mouseleave="isSubMenuVisible = false"
          >
            <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
            <v-list v-if="lien.sousMenu && isSubMenuVisible" class="sous-menu">
              <v-list-item v-for="(sousLien, sIndex) in lien.sousMenu" :key="`sous-${sIndex}`">
                <RouterLink :to="sousLien.url">{{ sousLien.nom }}</RouterLink>
              </v-list-item>
            </v-list>
          </v-list-item></v-list
        >
      </v-col>
      <v-col cols="auto" class="d-flex">
        <!--------------ICONES----------------->
        <v-col cols="auto" class="d-none d-md-flex">
          <v-col>
            <v-badge :content="nombreArticles" color="error"
              ><v-icon class="iconePanier" @click="montrerPanier" icon>mdi-shopping</v-icon></v-badge
            ></v-col
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
      <v-badge :content="nombreArticles" color="error"
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
    isSubMenuVisible: false,

    liensMenu: [
      { nom: "Accueil", url: "/" },
      {
        nom: "Cours",
        url: "/cours",
        sousMenu: [
          { nom: "Yoga", url: "/yoga" },
          { nom: "Pilates", url: "/pilates" },
          { nom: "Méditation", url: "/meditation" },
        ],
      },

      { nom: "Services", url: "/services" },
      { nom: "Abonnement", url: "/HoraireTarifs" },
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

/*//////////////////BLOC MENU GRAND ECRAN////////////////////*/
.blockMenu {
  z-index: 15;
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
  width: 250px;
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
  /*/////////////// MENU  //////////////////*/
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
  .menu-item {
    position: relative;
    border-bottom: 5px solid transparent;
  }
  .menu-item:hover {
    border-bottom: 5px solid lightcoral;
    transition: border-bottom 0.3s ease;
    cursor: pointer;
  }
  .menu-item a {
    font-family: "Kotta One", sans-serif;
    color: var(--couleurTertiaire);
  }

  .sous-menu {
    display: none;
    position: fixed;
    width: max-content;
    top: 60px;
    background: #937fbc;
    color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    padding: 50px 10px;
    border-radius: 0 0 20px 20px;
  }

  .menu-item:hover .sous-menu,
  .sous-menu.visible {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: display 1s ease;
  }
  /*----LIENS----*/

  /*//////////////////ICONES////////////////////*/
}
</style>
