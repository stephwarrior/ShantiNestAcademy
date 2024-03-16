<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>

    <v-container>
      <v-row>
        <!--CONNEXION-->
        <v-col class="blocCnx" v-if="!user && !showInscription">
          <v-card class="carteCnx">
            <v-img height="auto" src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" cover> </v-img>
            <v-card-title>Connexion</v-card-title>
            <v-card-item>
              <SiteLogo taille="2.7rem" couleur="pink" />
              <v-form>
                <v-text-field v-model="email" label="Courriel" required clearable=""></v-text-field>
                <v-text-field v-model="password" label="Mot de passe" type="password" required clearable></v-text-field>
                <p v-if="errMsg">{{ errMsg }}</p>
                <v-btn @click="login">Connexion</v-btn>
                <div class="my-4 d-flex align-center justify-center subtitle-container">
                  <v-divider class="flex-grow-1"></v-divider>
                  <p>ou</p>
                  <v-divider class="flex-grow-1"></v-divider>
                </div>
                <v-btn @click="signInWithGoogle" color="white">
                  <i class="fab fa-google" style="color: #db4437; margin-right: 8px"></i> Connexion avec Google</v-btn
                >
                <p class="pasDeCompte">
                  Vous n'avez pas de compte? <span @click="showInscription = true">Inscrivez-vous ici</span>
                </p>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>

        <!--INSCRIPTION-->
        <v-col class="blocInscr" cols="12" v-if="!user && showInscription">
          <v-card class="carteInscription">
            <v-card-title>Créer un compte</v-card-title>
            <v-card-item>
              <v-form @submit.prevent="sinscrire">
                <v-text-field v-model="email" label="Courriel" required></v-text-field>
                <v-text-field v-model="password" label="Mot de passe" type="password" required></v-text-field>
                <p v-if="errMsg">{{ errMsg }}</p>
                <p v-if="inscriptionMsg">{{ inscriptionMsg }}</p>

                <v-btn type="submit">Inscription</v-btn>
                <!--Connexion avec google-->
                <p class="aUnCompte">
                  Vous avez déjà un compte? <span @click="showInscription = false">Connectez-vous ici</span>
                </p>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12" v-if="user">
          <div class="bienvenue">
            <h1>Namaste, {{ user.email }}</h1>
            <v-btn @click="logout">Déconnexion</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
<script>
import SiteLogo from "@/components/SiteLogo.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { auth, signIn, googleAuth, cnxGoogle, verifierCnx, creerCompte, deconnect } from "@/data/init";

export default {
  data: () => ({
    SiteLogo,
    tab: null,
    items: [
      {
        title: "Accueil",
        desactive: false,
        href: "/",
      },
      {
        title: "Connexion",
        desactive: true,
      },
    ],
  }),
  setup() {
    const email = ref("");
    const errMsg = ref("");
    const password = ref("");
    const inscriptionMsg = ref("");
    const showInscription = ref(false);

    //const user = ref(null);
    const store = useStore();
    const user = computed(() => store.state.user);
    //const router = useRouter();
    const login = async () => {
      try {
        await signIn(auth, email.value, password.value);
        // router.push({ path: "/" });
      } catch (error) {
        errMsg.value = error.message;
      }
    };
    const signInWithGoogle = async () => {
      try {
        await cnxGoogle(auth, googleAuth);
      } catch (error) {
        errMsg.value = error.message;
      }
    };
    const sinscrire = async () => {
      try {
        await creerCompte(auth, email.value, password.value);
        inscriptionMsg.value = "Inscription réussie. Vous pouvez maintenant vous connecter.";

        // Rediriger l'utilisateur vers la page d'accueil ou une autre page après l'inscription
      } catch (error) {
        errMsg.value = error.message;
      }
    };
    onMounted(() => {
      verifierCnx(auth, (currentUser) => {
        user.value = currentUser;
        console.log(user.value);
      });
    });

    return {
      user,
      email,
      password,
      errMsg,
      login,
      signInWithGoogle,
      sinscrire,
      inscriptionMsg,
      showInscription,
    };
  },
  created() {
    this.$store.dispatch("checkUser");
  },

  methods: {
    async logout() {
      try {
        await deconnect();
        // Traitement après déconnexion, par exemple :
        // this.$router.push('/login');
      } catch (error) {
        console.error("Erreur de déconnexion:", error.message);
        // Gestion de l'erreur de déconnexion, si nécessaire
      }
    },
  },
};
</script>
<style scoped>
main {
  height: 100vh;
}
.blocCnx {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*
.v-card {
  width: 50%;
}
.carteCnx {
  text-align: center;
}
.carteCnx .v-avatar {
  border: 2px solid var(--couleurPrincipale);
}
.v-form {
  display: flex;
  flex-direction: column;
}
.v-btn {
  margin: 1rem 0;
  font-size: 0.5rem;
}
.v-form p {
  font-size: 1.5rem;
  color: var(--couleurPrincipale);
  padding: 0 1rem;
}
*/
p.pasDeCompte,
p.aUnCompte {
  font-size: 1rem;
  color: black;
}

p.pasDeCompte span,
p.aUnCompte span {
  color: var(--couleurPrincipale);
  text-decoration: underline;
  cursor: pointer;
}
</style>
