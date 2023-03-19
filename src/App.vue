<template>
  <v-app>
    <!-- Div cost -->
    <the-header></the-header>
    <router-view></router-view>
    <!-- result -->
  </v-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>
