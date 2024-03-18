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
              <v-form>
                <!----------------------------connexion------------------------------>
                <v-text-field v-model="email" label="Courriel" required clearable=""></v-text-field>
                <v-text-field v-model="password" label="Mot de passe" type="password" required clearable></v-text-field>
                <p v-if="errMsg">{{ errMsg }}</p>

                <v-btn color="#937fbc" @click="login">Connexion</v-btn>

                <!-------------------------Diviseur/barre--------------------------------->
                <div class="my-4 d-flex align-center justify-center subtitle-container">
                  <v-divider class="flex-grow-1"></v-divider>
                  <p>ou</p>
                  <v-divider class="flex-grow-1"></v-divider>
                </div>
                <!----------------------Connexion avec gooogle------------------------------------>
                <v-btn class="btnGoogle" @click="signInWithGoogle" color="white">
                  <i class="fab fa-google" style="color: #db4437; margin-right: 8px"></i> Connexion avec Google</v-btn
                >
                <!-----------------------------si utilsateur na pas de compte----------------------------->
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
    const store = useStore();
    const user = computed(() => store.state.user);

    /////////Pour la connexion///////////
    const login = async () => {
      try {
        await signIn(auth, email.value, password.value);
        // router.push({ path: "/" });
      } catch (error) {
        errMsg.value = error.message;
      }
    };
    /////////Pour la connexion avec google///////////

    const signInWithGoogle = async () => {
      try {
        await cnxGoogle(auth, googleAuth);
      } catch (error) {
        errMsg.value = error.message;
      }
    };
    /////////Pour les inscriptions///////////

    const sinscrire = async () => {
      try {
        await creerCompte(auth, email.value, password.value);
        inscriptionMsg.value = "Inscription réussie. Vous pouvez maintenant vous connecter.";
      } catch (error) {
        errMsg.value = error.message;
      }
    };
    /////////Pour verifier etat de connexion de lutilisateur///////////
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

  /////////Pour la déconnexion///////////
  methods: {
    async logout() {
      try {
        await deconnect();
      } catch (error) {
        console.error("Erreur de déconnexion:", error.message);
      }
    },
  },
  created() {
    this.$store.dispatch("checkUser");
  },
};
</script>
<style scoped>
main {
  padding-top: 5rem;
  height: 110vh;
}
/******************************/

.blocCnx {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
/******************************/

.v-form p {
  font-size: 1.5rem;
  color: var(--couleurPrincipale);
  padding: 0 1rem;
}

/******************************/
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
/*************zone inscription*****************/

.blocInscr {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btnGoogle {
  margin-bottom: 2rem;
}

/*//////////////////------TABLETTE------////////////////////*/
@media (min-width: 768px) {
}
</style>
