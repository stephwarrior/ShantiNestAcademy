<template>
  <main>
    <v-parallax class="" height="500px" sm="4" :src="imgCourDeux">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">1er cours d'essai gratuit</p>
        <p class="text-h5">Découvrez notre offre de cours et trouvez celui qui vous convient</p>
      </div>
      <!--Div pour assombrir mon image -->
      <div class="overlay"></div>
    </v-parallax>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-row class="zoneForfaits justify-center">
      <v-col v-for="(forfait, index) in lesForfaits" :key="index" class="blocForfaits" cols="12">
        <v-col class="lesForfaits">
          <div>
            <h2>Notre forfait</h2>
            <h3>{{ forfait.titre }}</h3>
            <p>{{ forfait.mois }}</p>
            <p>{{ forfait.troisMois }}</p>
            <p>{{ forfait.sixMois }}</p>
            <p>{{ forfait.annuel }}</p>
          </div>
          <ul>
            <h2>Vos avantanges</h2>
            <li>{{ forfait.avantageUn }}</li>
            <li>{{ forfait.avantageDeux }}</li>
            <li>{{ forfait.avantageTrois }}</li>
            <li>{{ forfait.avantageQuatre }}</li>
          </ul>
        </v-col>
        <hr />
      </v-col>
      <p>*Pour un cours spécifique, conactez nous en personne, par téléphone ou par e-mail.</p>
    </v-row>
  </main>
</template>

<script>
export default {
  data() {
    return {
      /////////////////LES IMAGES/////////////////////
      imgCourDeux: require("@/img/general/sna12.jpeg"),

      tab: null,
      items: [
        {
          title: "Accueil",
          desactive: false,
          href: "/",
        },
        {
          title: "Abonnements",
          desactive: true,
        },
      ],

      lesForfaits: [
        {
          titre: "Étudiant",
          mois: "1 mois (cours  illimités consécutifs)  70 $+tx",
          troisMois: "3 mois (cours illimités consécutifs)  180 $+tx",
          sixMois: "6 mois (cours illimités consécutifs)  300 $+tx",
          annuel: "1 an (cours illimités consécutifs)  500 $+tx",
          titreAvantages: "Avantages",
          avantageUn: "Accès à tous nos cours",
          avantageDeux: "Rabais de 10% sur nos forfaits",
          avantageTrois: "Rabais de 15% sur nos articles en boutique",
          avantageQuatre: "Accès gratuit à nos chaises massantes",
        },
        {
          titre: "Shanti",
          mois: "1 mois (cours  illimités consécutifs)  80 $+tx",
          troisMois: "3 mois (cours illimités consécutifs)  200 $+tx",
          sixMois: "6 mois (cours illimités consécutifs)  350 $+tx",
          annuel: "1 an (cours illimités consécutifs)  600 $+tx",
          titreAvantages: "Avantages",
          avantageUn: "Accès à tous nos cours",
          avantageDeux: "Rabais de 10% sur nos forfaits",
          avantageTrois: "Rabais de 15% sur nos articles en boutique",
          avantageQuatre: "Bouteille SNA gratuite",
        },
        {
          titre: "ShantiNest",
          mois: "1 mois (cours  illimités consécutifs)  150 $+tx",
          troisMois: "3 mois (cours illimités consécutifs)  400 $+tx",
          sixMois: "6 mois (cours illimités consécutifs)  700 $+tx",
          annuel: "1 an (cours illimités consécutifs)  1200 $+tx",
          titreAvantages: "Avantages",
          avantageUn: "Inviter un ami par mois",
          avantageDeux: "Rabais de 20% sur nos forfaits",
          avantageTrois: "Rabais de 20% sur nos articles en boutique",
          avantageQuatre: "1 cours privé gratuit",
        },
        {
          titre: "ShantiNest Premium",
          mois: "1 mois (cours  illimités consécutifs)  150 $+tx",
          troisMois: "3 mois (cours illimités consécutifs)  400 $+tx",
          sixMois: "6 mois (cours illimités consécutifs)  700 $+tx",
          annuel: "1 an (cours illimités consécutifs)  1200 $+tx",
          titreAvantages: "Avantages",
          avantageUn: "Inviter deux amis par mois",
          avantageDeux: "Rabais de 30% sur nos forfaits",
          avantageTrois: "Rabais de 15% sur nos articles en boutique",
          avantageQuatre: "2 cours privé",
        },
      ],
    };
  },
};
</script>
<style scoped>
main {
  height: auto;
  padding-top: 3rem;
}

.lesForfaits h3 {
  font-family: var(--fontPrincipaleUn);
  font-size: 3rem;
  color: var(--couleurPrincipale);
}
/*///////////Tablette///////////////*/
@media (min-width: 768px) {
  .lesForfaits {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    margin: 1rem 0;
  }
}

/*///////////Grand écran///////////////*/
@media (min-width: 960px) {
}
</style>
