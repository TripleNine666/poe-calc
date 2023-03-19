<template>
  <v-app>
    <!-- Div cost -->
    <the-header></the-header>
    <!-- What runing -->
    <what-runing></what-runing>
    <!-- drop -->
    <drop-rate></drop-rate>
    <!-- result -->
  </v-app>
</template>

<script>
import DropRate from "./components/drop/DropRate.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import WhatRuning from "./components/WhatRuning.vue";

export default {
  components: {
    TheHeader,
    WhatRuning,
    DropRate,
  },
};
</script>
