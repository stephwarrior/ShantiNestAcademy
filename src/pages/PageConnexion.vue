<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <!--CONNEXION-->
    <v-container>
      <v-row>
        <v-col class="blocCnx" cols="12" v-if="!user">
          <v-card class="carteCnx">
            <v-avatar size="100" class="mx-auto">
              <v-img src="">Image</v-img>
            </v-avatar>
            <v-card-title>Connexion</v-card-title>
            <v-card-item>
              <v-form
                ><v-btn @click="signInWithGoogle">Connexion avec Google</v-btn>
                <div class="my-4 d-flex align-center justify-center subtitle-container">
                  <v-divider class="flex-grow-1"></v-divider>
                  <p>ou</p>
                  <v-divider class="flex-grow-1"></v-divider>
                </div>
                <v-text-field v-model:="email" label="Courriel" required></v-text-field>
                <v-text-field v-model:="password" label="Mot de passe" type="password" required></v-text-field>
                <p v-if="errMsg">{{ errMsg }}</p>
                <v-btn @click="login">Connexion</v-btn>
                <!--Connexion avec google-->

                <v-btn>Créer un compte</v-btn>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col cols="12" v-if="user">
          <div class="bienvenue">
            <p>Namaste, {{ user.email }}</p>
            <v-btn>Déconnexion</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
//import { useRouter } from "vue-router";
import { auth, signIn, googleAuth, cnxGoogle, verifierCnx } from "@/data/init";

export default {
  setup() {
    const email = ref("");
    const errMsg = ref("");
    const password = ref("");
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
    };
  },
  created() {
    this.$store.dispatch("checkUser");
  },

  data: () => ({
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
  padding: 3rem 0 7rem 0;
}
.carteCnx {
  width: 80%;
  padding: 2rem;
  text-align: center;
  border-radius: 20px;
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
  background-color: var(--couleurQuaternaire);
  color: var(--couleurTertiaire);
}
.v-form p {
  font-size: 1.5rem;
  color: var(--couleurPrincipale);
  padding: 0 1rem;
}
</style>
