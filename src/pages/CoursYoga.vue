<template>
  <main>
    <v-parallax
      height="800px"
      sm="4"
      src="https://media.cntraveler.com/photos/5be07adbcfd2bb17f97a7a52/16:9/w_3199,h_1799,c_limit/MAG18_DEC_TR120818_SG_Flores02.jpg"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <p class="text-h3 sous-titre">YOGA</p>
      </div>
      <!--<v-img
        height="400px"
        src="https://d33wubrfki0l68.cloudfront.net/772616e178d1844bb45cc244ee42ad217b0d4a64/6b6cf/images/schedule_main.png"
      ></v-img>-->
    </v-parallax>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
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
        title: "Cours de Yoga",
        desactive: true,
      },
    ],
  }),
};
</script>
<style scoped></style>
