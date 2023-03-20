<template>
  <!-- What runing -->
  <what-runing></what-runing>
  <!-- drop -->
  <drop-rate></drop-rate>
</template>

<script>
import DropRate from "../drop/DropRate.vue";
import WhatRuning from "../drop/WhatRuning.vue";
export default {
  components: {
    WhatRuning,
    DropRate,
  },
};
</script>
