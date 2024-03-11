import { createRouter, createWebHistory } from "vue-router";
import PageBoutique from "../pages/PageBoutique.vue";
import PageConnexion from "../pages/PageConnexion.vue";
import PageAccueil from "../pages/PageAccueil.vue";
import PageCours from "../pages/PageCours.vue";
import HoraireTarifs from "../pages/HoraireTarifs.vue";
import PageServices from "../pages/PageServices.vue";
import PageErreur from "../pages/PageErreur.vue";
import CoursYoga from "@/pages/CoursYoga.vue";
import CoursPilates from "@/pages/CoursPilates.vue";
import CoursMeditation from "@/pages/CoursMeditation.vue";
//import PanierAchat from "@/components/PanierAchat.vue";

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
    path: "/yoga",
    name: "yoga",
    component: CoursYoga,
  },
  {
    path: "/pilates",
    name: "pilates",
    component: CoursPilates,
  },
  {
    path: "/meditation",
    name: "meditation",
    component: CoursMeditation,
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
