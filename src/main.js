import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import BaseButton from "./components/ui/BaseButton.vue";

loadFonts();

const app = createApp(App);

app.component("base-button", BaseButton);

app.use(vuetify);
app.use(store);

app.mount("#app");
