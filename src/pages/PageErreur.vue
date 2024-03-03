<template>
  <main class="erreur404">
    <div><RouterLink to="/">Accueil</RouterLink>/ Erreur 404</div>
    <div v-for="image in images" :key="image.id">
      <img :src="image.url" :alt="image.description" />
    </div>
    <h1>404</h1>
    <h2>Oups! La page que vous cherchez n'existe pas.</h2>
    <p>Il se peut que l'URL soit incorrecte ou que la page ait été déplacée.</p>
    <router-link to="/">Retourner à l'accueil</router-link>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background-color: black;
}

.erreur404 :not(.erreur404 div) {
  text-align: center;
  padding-top: 50px;
}

.erreur404 h1 {
  font-size: 96px;
  margin-bottom: 40px;
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
