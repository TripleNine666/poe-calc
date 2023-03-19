<template>
  <base-card>
    <v-card-item>
      <v-card-title>Что может выпасть</v-card-title>
      <v-card-subtitle>Впиши все в текстовые поля</v-card-subtitle>
    </v-card-item>
    <!-- drop component -->
    <drop-item v-for="_ in dropAmount" :key="_"></drop-item>
    <!-- add drop button -->
    <v-btn color="success" variant="plain" @click="addDrop">Add drop</v-btn>
    <v-btn
      color="error"
      variant="plain"
      v-if="showDeleteButton"
      @click="deleteDrop"
      >Delete last drop</v-btn
    >
  </base-card>
</template>

<script>
import DropItem from "./DropItem.vue";
export default {
  components: { DropItem },
  data() {
    return {
      dropAmount: 1,
    };
  },
  computed: {
    drops() {
      return this.$state.getters["farm/getDrops"];
    },
    showDeleteButton() {
      return this.dropAmount > 0;
    },
  },
  methods: {
    addDrop() {
      this.dropAmount++;
    },
    deleteDrop() {
      this.dropAmount--;
    },
  },
};
</script>
