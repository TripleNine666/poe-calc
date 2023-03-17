import { createStore } from "vuex";

import contentFarm from "./modules/farm/index.js";

const store = createStore({
  modules: {
    farm: contentFarm,
  },
});

export default store;
