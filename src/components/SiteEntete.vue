<template>
  <header class="header">
    <nav class="navbar">
      <SiteLogo />
      <div class="navbar-menu">
        <ul class="blocLiensMenu" v-show="MenuDesktopActive">
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/cours">Cours</RouterLink></li>
          <li><RouterLink to="/services">Service</RouterLink></li>
          <li>
            <RouterLink to="/HoraireTarifs">Horaire et Tarifs</RouterLink>
          </li>
          <li><RouterLink to="/boutique">Boutique</RouterLink></li>
        </ul>
      </div>

      <button class="navbar-toggler" @click="toggleMenu">
        <span class="navbar-toggler-icon">&#9776;</span>
      </button>
    </nav>
  </header>
  <div class="menu-mobile" v-if="!MenuMobileActive">
    <input type="text" />
    <ul>
      <li v-for="(lien, index) in liens" :key="index">
        <RouterLink to="/">{{ lien.nom }}</RouterLink>
      </li>
      <!-- <li><RouterLink to="/cours">Cours</RouterLink></li>
      <li><RouterLink to="/services">Service</RouterLink></li>
      <li><RouterLink to="/HoraireTarifs">Horaire et Tarifs</RouterLink></li>
      <li><RouterLink to="/boutique">Boutique</RouterLink></li>-->
      <!-- <li><RouterLink to="/contact">Nous Rejoindre</RouterLink></li>-->
    </ul>
  </div>
</template>
<script>
import SiteLogo from "./SiteLogo.vue";

export default {
  name: "SiteHeader",
  data() {
    return {
      MenuMobileActive: true,
      MenuDesktopActive: false,
      liensMenu: [
        { nom: "Accueil", url: "/accueil" },
        { nom: "Cours", url: "/cours" },
        { nom: "Service", url: "/services" },
        { nom: "Horaire et Tarifs", url: "/HoraireTarifs" },
        { nom: "Boutique", url: "/boutique" },
        { nom: "Nous Rejoindre", url: "/contact" },
      ],
      components: {
        SiteLogo,
      },
    };
  },
  mounted() {
    this.checkTailleEcran();
    window.addEventListener("resize", this.checkTailleEcran);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkTailleEcran);
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #937fbc;
}
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  margin: 0;
  color: white;
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
.blocLiensMenu > li {
  margin: 0 30px;
  text-decoration: none;
}
.blocLiensMenu > li > a {
  color: white;
  text-decoration: none;
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
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
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
  color: white;
  text-decoration: none;
  font-size: clamp(0.1rem, -0.2581rem + 8.3871vw, 2.5rem);
}

.header .navbar-toggler {
  font-size: 2.7rem;
  background: none;
  border: none;
}
.navbar .navbar-toggler {
  z-index: 3;
}
ul .navbar-toggler {
  font-size: 24px;
  background: none;
  border: none;
}

.navbar-toggler-icon {
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
