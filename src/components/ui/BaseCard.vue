<template>
  <div class="container">
    <v-card width="800" variant="outlined">
      <slot></slot>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}
</style>
