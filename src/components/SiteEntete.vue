<template>
  <header>
    <!--cols="8" md="auto"-->
    <v-row no-gutters class="contenuRow align-center">
      <!--------------LOGO----------------->
      <v-col cols="auto" class="d-none d-md-flex">
        <SiteLogo />
      </v-col>
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
            ><v-col>
              <v-badge :content="nombreArticles" color="error"
                ><v-icon class="iconePanier" @click="montrerPanier" icon>mdi-shopping</v-icon></v-badge
              ></v-col
            ></RouterLink
          >
          <RouterLink to="/connexion"
            ><v-col> <v-icon class="iconeCnx" icon>mdi-account</v-icon></v-col></RouterLink
          >
        </v-col></v-col
      >
    </v-row>
    <!--------------HEADER MENU-MOBILE/TABLETTE---------->
    <div class="enteteMobTab d-md-none">
      <SiteLogo />
      <p class="titreLogo d-md-none">ShantiNest Academy</p>
      <!--------------ICONE MOBILE/TABLETTE------------>

      <v-badge :content="nombreArticles"
        ><v-icon @click="montrerPanier" class="iconePanier" icon>mdi-shopping</v-icon></v-badge
      ><RouterLink to="/connexion"><v-icon class="iconeCnx" icon>mdi-account</v-icon></RouterLink>
      <!--------------BOUTON MENU-MOBILE/TABLETTE---------->
      <div class="menuBurger">
        <v-btn icon @click="ouvreNav">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </div>
  </header>
  <!--------------BLOC MENU-MOBILE/TABLETTE----------->
  <div class="blocMenumobile d-md-none">
    <div class="menu-mobile" v-click-outside="ouvreNav" v-if="menuMobileActive">
      <input type="search" name="recherche" id="recherche" label="recherche" />

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
      this.$emit("afficher-le-panier");
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
/*//////////////////RECHERCHE////////////////////*/
input#recherche {
  background-color: rgba(0, 0, 0, 0.229);
  padding: 1rem;
  width: 60%;
  border: var(--couleurPrincipale) 1px solid;
  border-radius: 20px;
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
  }
}
</style>
