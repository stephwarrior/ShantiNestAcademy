<template>
  <footer>
    <div class="zoneFooter">
      <div class="logo d-none align-center d-md-flex">
        <SiteLogo taille="7rem" />
        <div class="logoTitre">
          <p>ShantiNest</p>
          <p>Academy</p>
        </div>
      </div>
      <!-------------------------------------------->
      <div class="zoneContact">
        <h2>{{ sousTitreFooterUn }}</h2>
        <div class="iconeRS">
          <SiteIcones name="facebook"></SiteIcones>
          <SiteIcones name="twitter"></SiteIcones>
          <SiteIcones name="youtube"></SiteIcones>
          <SiteIcones name="instagram"></SiteIcones>
        </div>
        <ul class="contactInfo">
          <li class="courrier"><SiteIcones name="email" />{{ courriel }}</li>
          <li class="adresse"><SiteIcones name="adresse" />{{ adresse }}</li>
          <li class="telephone"><SiteIcones name="telephone" /> {{ telephone }}</li>
        </ul>
      </div>
      <div class="zoneServices d-none d-sm-flex">
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
/** /////////////////////////////ZONE TOUT//////////////////////////// */
h2 {
  font-family: "Kotta One", sans-serif;
}
/** /////////////////////////////ZONE FOOTER//////////////////////////// */
footer {
  width: 100vw;
  background-color: #937fbc;
  padding-top: 2rem;
  position: relative;
  bottom: 0;
  text-align: center;
}
.zoneFooter {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/** /////////////////////////////ZONE CONTACT//////////////////////////// */

/** LOGO */
.logo p {
  font-family: var(--fontPrincipaleUn);
  font-size: 2rem;
  padding-left: 15px;
}
/** ICONES */
.iconeRS {
  display: flex;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  fill: white;
  width: 100%;
  justify-content: space-between;
}

/** NOUS JOINDRE */
.contactInfo li {
  display: flex;
  align-items: flex-end;
  align-items: center;
  margin-top: 2rem;
}
.contactInfo li div {
  display: flex;
  margin-right: 0.8rem;
}

/** /////////////////////////////ZONE SERVICES//////////////////////////// */

.zoneServices ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0;
  padding: 0;
}
.zoneServices ul li {
  margin: 2rem 1rem auto 0;
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
  font-family: "Raleway", sans-serif;
  font-weight: 600;
}

/** /////////////////////////////ZONE COPYRIGHT//////////////////////////// */
.copyright {
  width: 100vw;
  border-top: 1px solid;
  padding: 0.5em 0;
  margin: 2rem 0 0;
}
/*////////////////////////////ANIMATION///////////////////////////*/
.zoneServices ul li a:hover {
  color: #57dfd9;
  transition: 0.3s ease-in-out;
}

.iconeRS > *:hover {
  fill: #57dfd9;
  cursor: pointer;
  transition: fill 0.3s ease-in-out;
}
</style>
