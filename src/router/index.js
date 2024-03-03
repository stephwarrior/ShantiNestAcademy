import { createRouter, createWebHistory } from "vue-router";
import PageBoutique from "../pages/PageBoutique.vue";
import PageConnexion from "../pages/PageConnexion.vue";
import PageAccueil from "../pages/PageAccueil.vue";
import PageCours from "../pages/PageCours.vue";
import HoraireTarifs from "../pages/HoraireTarifs.vue";
import PageServices from "../pages/PageServices.vue";
import PageErreur from "../pages/PageErreur.vue";

const routes = [
  {
    path: "/boutique",
    name: "boutique",
    component: PageBoutique,
  },
  {
    path: "/connexion",
    name: "connexion",
    component: PageConnexion,
  },
  {
    path: "/",
    name: "accueil",
    component: PageAccueil,
  },
  {
    path: "/cours",
    name: "cours",
    component: PageCours,
  },
  {
    path: "/HoraireTarifs",
    name: "HoraireTarifs",
    component: HoraireTarifs,
  },
  {
    path: "/services",
    name: "services",
    component: PageServices,
  },
  {
    path: "/:catchAll(.*)",
    name: "erreur404",
    component: PageErreur,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
