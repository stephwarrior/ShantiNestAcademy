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
import { mapGetters, mapActions } from "vuex";
import { auth, signIn, googleAuth, cnxGoogle, verifierCnx, creerCompte, deconnect } from "@/data/init";

export default {
  //////////////////---EXPORTATIONS/DATA---/////////////////////
  data() {
    return {
      email: "",
      password: "",
      errMsg: "",
      inscriptionMsg: "",
      showInscription: false,
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
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["loginUser", "logoutUser"]),
    login() {
      signIn(auth, this.email, this.password)
        .then((userCredential) => {
          this.loginUser(userCredential.user);
        })
        .catch((error) => {
          this.errMsg = error.message;
        });
    },
    signInWithGoogle() {
      cnxGoogle(auth, googleAuth)
        .then((userCredential) => {
          this.loginUser(userCredential.user);
        })
        .catch((error) => {
          this.errMsg = error.message;
        });
    },
    sinscrire() {
      creerCompte(auth, this.email, this.password)
        .then(() => {
          this.inscriptionMsg = "Inscription réussie. Vous pouvez maintenant vous connecter.";
        })
        .catch((error) => {
          this.errMsg = error.message;
        });
    },
    logout() {
      deconnect(auth)
        .then(() => {
          this.logoutUser();
        })
        .catch((error) => {
          console.error("Erreur de déconnexion:", error.message);
        });
    },
  },
  created() {
    verifierCnx(auth, (currentUser) => {
      if (currentUser) {
        this.loginUser(currentUser);
      } else {
        this.logoutUser();
      }
    });
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
