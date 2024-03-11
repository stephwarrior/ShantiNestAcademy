import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  display: {
    mobileBreakpoint: "sm",
    thresholds: {
      xs: 320,
      sm: 500,
      md: 768,
      lg: 960,
      xl: 1440,
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(vuetify); // Appliquez vuetify de cette manière

app.mount("#app");
