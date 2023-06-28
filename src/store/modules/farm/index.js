import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      runInfo: {
        farmName: "",
        oneCircleTime: null,
        circlesAmount: null,
        cost: null,
      },
      farmFormIsSumbmited: false,
      drops: [],
    };
  },
  mutations,
  actions,
  getters,
};
