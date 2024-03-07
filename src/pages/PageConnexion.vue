<template>
  <main>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <!--CONNEXION-->
    <v-container>
      <v-row>
        <v-col class="blocCnx" cols="12">
          <v-card class="carteCnx">
            <v-avatar size="100" class="mx-auto">
              <v-img src="">Image</v-img>
            </v-avatar>
            <v-card-title>Connexion</v-card-title>
            <v-card-text>
              <v-form
                ><v-btn>Connexion avec Google</v-btn>
                <div class="my-4 d-flex align-center justify-center subtitle-container">
                  <v-divider class="flex-grow-1"></v-divider>
                  <p>ou</p>
                  <v-divider class="flex-grow-1"></v-divider>
                </div>
                <v-text-field label="Courriel" required></v-text-field>
                <v-text-field label="Mot de passe" required></v-text-field>
                <v-btn>Connexion</v-btn>
                <!--Connexion avec google-->

                <v-btn>Créer un compte</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
<script>
export default {
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
  height: auto;
}
.blocCnx {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 7rem 0;
}
.carteCnx {
  width: 70%;
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
  font-size: 0.7rem;
  background-color: var(--couleurQuaternaire);
  color: var(--couleurTertiaire);
}
.v-form p {
  font-size: 1.5rem;
  color: var(--couleurPrincipale);
  padding: 0 1rem;
}
</style>
