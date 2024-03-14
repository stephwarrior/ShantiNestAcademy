<template>
  <footer>
    <div class="zoneFooter">
      <div class="test d-none align-center d-md-flex">
        <SiteLogo />
        <div>
          <p>ShantiNest</p>
          <p>Academy</p>
        </div>
      </div>

      <div class="zoneContact">
        <h2>{{ sousTitreFooterUn }}</h2>
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
      <div class="zoneServices d-none align-center d-sm-flex">
        <h2>{{ sousTitreFooterDeux }}</h2>
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
  name: "App",
  components: {
    SiteIcones,
    SiteLogo,
  },
};
</script>

<style scoped>
/** /////////////////////////////ZONE FOOTER//////////////////////////// */
footer {
  width: 100vw;
  background-color: #937fbc;
  padding-top: 2rem;
  position: relative;
  bottom: 0;
  text-align: center;
  font-family: "Nanum Myeongjo", sans-serif;
}
.zoneFooter {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/** /////////////////////////////ZONE CONTACT//////////////////////////// */
/** LOGO */
.test .logoSNA > svg {
  width: 15vw;
  height: auto;
}
.test p {
  font-size: 1.5rem;
}
/** ICONES */
.iconeRS {
  display: flex;
  margin: 0;
  padding: 0;
  fill: white;
}
.iconeRS > * {
  margin: 0 1rem 0 0;
}

/** NOUS JOINDRE */
.contactInfo div {
  display: flex;
  align-items: flex-end;
  margin: 0.6rem 1rem auto 0;
}
/** /////////////////////////////ZONE SERVICES//////////////////////////// */

/** SERVICES */
.zoneServices ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0;
  padding: 0;
}
.zoneServices ul li {
  margin: 0.6rem 1rem auto 0;
  font-size: 1rem;
}
.zoneServices ul li a {
  color: white;
}

/** /////////////////////////////ZONE CONTACT ET SERVICES//////////////////////////// */
.zoneContact,
.zoneServices {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/** /////////////////////////////ZONE COPYRIGHT//////////////////////////// */
.copyright {
  width: 100vw;
  border-top: 1px solid;
  padding: 0.5em 0;
  margin: 2rem 0 0;
}
/** /////////////////////////////ZONE TOUT//////////////////////////// */
h2 {
  font-family: "Kotta One", sans-serif;
}
</style>
