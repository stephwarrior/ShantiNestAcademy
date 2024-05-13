<template>
  <main class="erreur404">
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-container>
      <v-row>
        <v-col sm="5">
          <v-img src="https://p.productioncrate.com/stock-hd/effects/footagecrate-red-error-icon@3X.png"></v-img>
        </v-col>
        <v-col sm="8">
          <h1>Oups! 404</h1>
          <h2>La page que vous cherchez n'existe pas.</h2>
          <p>Il se peut que l'URL soit incorrecte ou que la page ait été déplacée.</p>
          <v-btn variant="tonal" to="/">Retourner à l'accueil</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import PageErreur from "@/data/PageErreur.json";
export default {
  data: () => ({
    items: PageErreur.items,
  }),
};
</script>

<style scoped>
main {
  height: auto;
}

.v-container .v-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.erreur404 h1 {
  font-size: 96px;
}

.erreur404 h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.erreur404 p {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>
