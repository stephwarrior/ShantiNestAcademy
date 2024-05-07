import { createStore } from "vuex";
import { auth, verifierCnx } from "@/data/init";

export default createStore({
  state() {
    return {
      panier: [],
      user: null,
    };
  },
  mutations: {
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
  getters: {
    nombreArticles: (state) => state.panier.reduce((total, article) => total + article.quantite, 0),
    articlesPanier: (state) => state.panier,
    user: (state) => {
      return state.user;
    },
  },
});
