<template>
  <div class="sousTitres">
    <div class="blackpink my-4 d-flex align-center justify-center subtitle-container">
      <v-divider class="flex-grow-1"></v-divider>
      <h1 class="leSt mx-4">{{ test.title }}</h1>
      <v-divider class="flex-grow-1"></v-divider>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    test: {
      title: "Qui sommes nous?",
    },
  }),
};
</script>
<style scoped>
.sousTitres {
  display: flex;
  justify-content: center;
}
.blackpink {
  width: 100vw;
}

.subtitle-container {
  display: flex;
  align-items: center;
}

.leSt {
  font-family: var(--fontPrincipaleUn);
  color: var(--couleurPrincipale);
  white-space: nowrap;
}

.v-divider {
  min-height: 0.1rem;
  background-color: var(--couleurPrincipale);
}
</style>
