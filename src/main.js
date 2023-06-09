import { createApp } from "vue";
import App from "./App.vue";

import store from "./store/index.js";
import vuetify from "./plugins/vuetify";
import router from "./router.js";

import { loadFonts } from "./plugins/webfontloader";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseCard from "./components/ui/BaseCard.vue";

loadFonts();

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-card", BaseCard);

app.use(store);
app.use(router);
app.use(vuetify);

app.mount("#app");
