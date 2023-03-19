<template>
  <v-btn :disabled="disabled" v-if="!link" variant="outlined"
    ><slot></slot
  ></v-btn>
  <v-btn :disabled="disabled" v-else variant="outlined"
    ><router-link :to="to"><slot></slot></router-link
  ></v-btn>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
