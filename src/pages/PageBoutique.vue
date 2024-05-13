<template>
  <main>
    <v-breadcrumbs color="#644a9d" :items="items"></v-breadcrumbs>
    <v-container>
      <!--Pour afficher le nombre d'articles dans la boutique-->
      <div class="nbrItems">
        <h2>{{ lesArticles.length }} Articles</h2>
      </div>
      <!--------------------Les Articles (Boucle)------------------------>
      <v-row class="zoneArticles">
        <v-col class="blocArticles" cols="12" sm="6" md="3" v-for="article in lesArticles" :key="article.id">
          <v-card class="lesArticles">
            <v-img :src="article.img || article.variantes[0].img" alt="pas image">
              <div v-if="article.variantes" class="variantColors">
                <div
                  class="colorSelector"
                  v-for="variant in article.variantes"
                  :key="variant.id"
                  :style="{ backgroundColor: variant.couleur }"
                  @click="updateImg(article, variant)"
                ></div></div
            ></v-img>
            <h3>{{ article.nom }}</h3>
            <p>${{ article.prix }}.00 CAD</p>

            <v-btn rounded="xl" color="#42A5A1" elevated @click="ajouterArticle(article)"
              >Ajouter au panier
            </v-btn></v-card
          ></v-col
        ></v-row
      ></v-container
    >
  </main>
</template>
<script>
//////////////////---IMPORTATIONS---/////////////////////
import { mapActions } from "vuex";
import lesArticles from "@/data/PageBoutique.js";

export default {
  //////////////////---EXPORTATIONS/DATA---/////////////////////
  data() {
    return {
      ////////////////////DATA EXTERNE//////////////////
      lesArticles: lesArticles.articles,
      ////////////////////ROUTE VERS PAGE ACCUEIL//////////////////
      items: [
        {
          title: "Accueil",
          desactive: false,
          href: "/",
        },
        {
          title: "Boutique",
          desactive: true,
        },
      ],
    };
    //////////////////---CONSOLE LOG---/////////////////////
    //console.log("erreur", lesArticles);
  },
  //Permet d'ajouter l'article selectionne au panier et incrementer le nombre de fois quil a ete ajoutee
  methods: {
    // Importer laction ajouterAuPanier de mon store Vuex ici.
    ...mapActions(["ajouterAuPanier"]),
    ajouterArticle(article) {
      // Verifie si l'article a des variantes et si une variante est selectionner
      if (article.variantes && article.varianteActuelle) {
        const variante = article.variantes.find((v) => v.id === article.varianteActuelle);
        if (variante) {
          this.ajouterAuPanier({
            ...article,
            nom: variante.nom,
            img: variante.img,
            id: variante.id,
            prix: variante.prix || article.prix,
            count: 1,
          });
        } else {
          console.log("Variante introuvable");
        }
      } else {
        // Gerer les articles sans variantes
        this.ajouterAuPanier({
          ...article,
          count: 1,
        });
      }
    },
    //Pour mettre à jour l'image de l'article en fonction de la variante selectionnee
    updateImg(article, variant) {
      if (variant) {
        article.img = variant.img;
        article.nom = variant.nom;
        article.prix = variant.prix;
        article.varianteActuelle = variant.id;
      } else {
        console.log("Aucune variante à mettre à jour pour cet article");
      }
    },
  },
};
</script>
<style scoped>
/*//////////////////GLOBAL////////////////////*/
main {
  padding: 4rem 0;
  height: auto;
}
.v-container {
  padding: 0 3rem;
}
.nbrItems {
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
}
.variantColors {
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-end;
}

.colorSelector {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  margin: 5px;
  border: 1px solid #ccc;
}
.colorSelector:hover {
  opacity: 0.7;
  scale: 1.05;
}

/*//////////////////LES ARTICLES////////////////////*/
.zoneArticles {
  display: flex;
}
.lesArticles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  box-shadow: none;
}
.lesArticles > * {
  margin: 0.3rem 0;
}
.lesArticles .v-img {
  width: 100%;
  height: 250px;
  background-color: white;
  border-radius: 20px;
}
.lesArticles .v-btn {
  width: 100%;
  font-size: 0.7rem;
}

/*//////////////////Tablette////////////////////*/
@media (min-width: 960px) {
  main {
    padding: 7rem 0;
  }
  .v-container {
    padding: 0;
  }

  .lesArticles {
    padding: 2rem;
  }
}
</style>
