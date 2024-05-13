<template>
  <div class="sousTitres">
    <div class="my-4 d-flex align-center justify-center subtitle-container">
      <v-divider class="flex-grow-1"></v-divider>
      <h1 class="leSt mx-4" :style="{ color: subtitleColor }">{{ title }}</h1>
      <v-divider class="flex-grow-1"></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "sous-titre",
    },
    subtitleColor: {
      type: String,
      default: "var(--couleurPrincipale)", // Couleur par défaut
    },
  },
};
</script>
<style scoped>
.sousTitres {
  display: flex;
  justify-content: center;
}
.sousTitres div {
  width: 100vw;
}

.subtitle-container {
  display: flex;
  align-items: center;
}

.leSt {
  font-size: clamp(1.5rem, 0.4286rem + 2.8571vw, 2.7rem);
  font-family: var(--fontPrincipaleUn);
  color: var(--couleurPrincipale);
  white-space: nowrap;
}

.v-divider {
  min-height: 0.1rem;
  background-color: var(--couleurPrincipale);
}
</style>
