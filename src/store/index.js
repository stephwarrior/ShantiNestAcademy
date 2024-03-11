import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      panier: [],
    };
  },
  mutations: {
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
  },
  actions: {
    ajouterAuPanier({ commit }, article) {
      commit("AJOUTER_AU_PANIER", article);
    },
    retireDuPanier({ commit }, articleId) {
      commit("RETIRER_DU_PANIER", articleId);
    },
  },
  getters: {
    nombreArticles: (state) => {
      return state.panier.reduce((total, article) => total + article.quantite, 0);
    },
    articlesPanier: (state) => {
      return state.panier;
    },
  },
});
