<template>
  <header>
    <div class="container">
      <h1>Divine cost per chaos = 100c</h1>
      <div class="actions">
        <base-button>Change cost</base-button>
        <base-button>Show history</base-button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  background: rgb(145, 145, 170);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 1rem;
}
.container h1 {
  justify-self: flex-start;
}
.actions button {
  margin: 0 0.5rem;
}
</style>
