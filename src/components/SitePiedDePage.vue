<template>
  <footer>
    <div class="zoneFooter">
      <div class="test" v-show="largeurEcran > 768">
        <SiteLogo />
        <p>{{ NomLogo }}</p>
      </div>

      <div class="zoneContact">
        <h3>{{ sousTitreFooterUn }}</h3>
        <div class="iconeRS">
          <SiteIcones name="facebook"></SiteIcones>
          <SiteIcones name="twitter"></SiteIcones>
          <SiteIcones name="youtube"></SiteIcones>
          <SiteIcones name="instagram"></SiteIcones>
        </div>
        <div class="contactInfo">
          <div class="courrier"><SiteIcones name="email" />{{ courriel }}</div>
          <div class="adresse"><SiteIcones name="adresse" />{{ adresse }}</div>
          <div class="telephone"><SiteIcones name="telephone" /> {{ telephone }}</div>
        </div>
      </div>
      <div class="zoneServices" v-show="largeurEcran > 768">
        <h3>{{ sousTitreFooterDeux }}</h3>
        <ul>
          <li v-for="(lien, index) in liensMenu" :key="index">
            <RouterLink :to="lien.url">{{ lien.nom }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <p class="copyright">&copy;2024shantinestacademy.All right reserved.</p>
  </footer>
</template>
<script>
import SiteLogo from "./SiteLogo.vue";
import SiteIcones from "./SiteIcones.vue";

export default {
  data() {
    return {
      NomLogo: "Shanti Nest Academy",
      sousTitreFooterUn: "Nous Joindre",
      sousTitreFooterDeux: "Services",
      courriel: "shantinestacademy@hotmail.com",
      adresse: "10450 Rue Lavallé, H1C 3T4",
      telephone: "514-123-4567",
      largeurEcran: window.innerWidth,
      liensMenu: [
        { nom: "Carrière", url: "/services" },
        { nom: "Boutique", url: "/boutique" },
        { nom: "Location Salles", url: "/services" },
        { nom: "Horaire et Tarifs", url: "/HoraireTarifs" },
      ],
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
    checkTailleEcran() {
      this.largeurEcran = window.innerWidth;
    },
  },
  name: "App",
  components: {
    SiteIcones,
    SiteLogo,
  },
};
</script>
<style scoped>
footer {
  width: 100vw;
  height: 30vh;
  background-color: #937fbc;
  text-align: center;
}
.zoneFooter {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.copyright {
  width: 100vw;
  border-top: 1px solid;
  padding: 0.5em 0 0;
  position: inherit;
  bottom: 0;
}

.zoneContact,
.zoneServices {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.zoneServices ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.iconeRS {
  display: flex;
  margin: 0;
  padding: 0;
  fill: white;
}
.iconeRS > * {
  margin: 0 15px;
}

.contactInfo > div {
  display: flex;
}
</style>
