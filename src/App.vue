<template>
  <v-app>
    <!-- Div cost -->
    <the-header></the-header>
    <!-- What runing -->
    <what-runing></what-runing>
    <!-- drop -->
    <!-- result -->
  </v-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import WhatRuning from "./components/WhatRuning.vue";

export default {
  components: {
    TheHeader,
    WhatRuning,
  },
};
</script>
