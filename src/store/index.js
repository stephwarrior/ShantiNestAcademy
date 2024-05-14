import { createStore } from "vuex";
import { auth, verifierCnx } from "@/data/init";

export default createStore({
  //Montre etat initial de lapplication. panier vide et un utilisateur non connecte
  state() {
    return {
      panier: [],
      user: null,
    };
  },
  //Fonctions utilisees pour modifier letat de lapplication ou elements specifiques
  mutations: {
    //exemple: modifie utilisateur connecte
    setUser(state, user) {
      state.user = user;
    },

    AJOUTER_AU_PANIER(state, article) {
      const existant = state.panier.find((item) => item.id === article.id);
      if (existant) {
        existant.quantite++;
      } else {
        state.panier.push({ ...article, quantite: 1 });
      }
    },
    RETIRER_DU_PANIER(state, articleId) {
      const index = state.panier.findIndex((item) => item.id === articleId);
      if (index !== -1) {
        if (state.panier[index].quantite > 1) {
          state.panier[index].quantite--;
        } else {
          state.panier.splice(index, 1);
        }
      }
    },
    SUPPRIMER_ARTICLE(state, articleId) {
      const index = state.panier.findIndex((item) => item.id === articleId);
      if (index !== -1) {
        state.panier.splice(index, 1);
      }
    },
  },
  //Fonctions asynchrones utilisees pour faire des operations telles que la verification de la connexion de lutilisateur, la connexion de lutilisateur, la deconnexion de lutilisateur, lajout dun article au panier, le retrait dun article du panier et la suppression dun article du panier.
  actions: {
    checkUser({ commit }) {
      verifierCnx(auth, (user) => {
        commit("setUser", user);
      });
    },
    loginUser({ commit }, userData) {
      commit("setUser", userData);
    },
    logoutUser({ commit }) {
      commit("setUser", null);
    },
    ajouterAuPanier({ commit }, article) {
      commit("AJOUTER_AU_PANIER", article);
    },
    retireDuPanier({ commit }, articleId) {
      commit("RETIRER_DU_PANIER", articleId);
    },
    supprimerArticle({ commit }, articleId) {
      commit("SUPPRIMER_ARTICLE", articleId);
    },
  },
  //Fonctions qui permettent dacceder aux  donnees de letat de lapplication de maniere calculee. Utile si jai besoin de transformer ou filtrer les donneesd de letat dune maniere qui nest pas directement stockee dans letat lui meme.
  getters: {
    nombreArticles: (state) => state.panier.reduce((total, article) => total + article.quantite, 0),
    articlesPanier: (state) => state.panier,
    user: (state) => {
      return state.user;
    },
  },
});
