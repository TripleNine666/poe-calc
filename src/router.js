import { createRouter, createWebHistory } from "vue-router";

import SelectFarm from "./components/pages/SelectFarm.vue";
import FarmResult from "./components/pages/FarmResult.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/select" },
    { path: "/select", component: SelectFarm },
    { path: "/result", component: FarmResult },
  ],
});

export default router;
