<template>
  <header class="header">
    <nav class="navbar">
      <SiteLogo />
      <div class="navbar-menu">
        <ul class="blocLiensMenu" v-show="MenuDesktopActive">
          <li v-for="(lien, index) in liensMenu" :key="index">
            <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
          </li>
        </ul>
      </div>

      <button class="navbar-toggler" @click="toggleMenu">
        <span class="navbar-toggler-icon">&#9776;</span>
      </button>
      <div class="menu-mobile" v-if="!MenuMobileActive">
        <input type="text" />
        <ul>
          <li v-for="(lien, index) in liensMenu" :key="index">
            <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
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
        { nom: "Accueil", url: "/" },
        { nom: "Cours", url: "/cours" },
        { nom: "Services", url: "/services" },
        { nom: "Horaires et Tarifs", url: "/HoraireTarifs" },
        { nom: "Boutique", url: "/boutique" },
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
  width: 100vw;
  background-color: #937fbc;
  z-index: 2;
  position: fixed;
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
}
.blocLiensMenu > li > a,
.menu-mobile ul li a {
  color: white;
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
