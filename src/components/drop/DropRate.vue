<template>
  <base-card>
    <v-card-item>
      <v-card-title>Что может выпасть</v-card-title>
      <v-card-subtitle>Впиши все в текстовые поля</v-card-subtitle>
    </v-card-item>
    <!-- drop component -->
    <drop-item
      v-for="drop in getDrops"
      :key="drop.dropId"
      :id="drop.dropId"
      @drop-save="dropSavedIncriment(true)"
      @change-save="dropSavedIncriment()"
    ></drop-item>
    <!-- add drop button -->
    <div class="actions">
      <base-button :disabled="showResultButtonAvailable" link to="/result"
        >Show Result</base-button
      >
      <div>
        <v-btn color="success" variant="plain" @click="addDrop">Add drop</v-btn>
        <v-btn
          color="error"
          variant="plain"
          v-if="showDeleteButton"
          @click="deleteDrop"
          >Delete last drop</v-btn
        >
      </div>
    </div>
  </base-card>
</template>

<script>
import DropItem from "./DropItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { DropItem },
  data() {
    return {
      // dropAmount: 1,
      dropSavedAmount: 0,
    };
  },
  computed: {
    ...mapGetters("farm", ["dropAmount", "getDrops"]),
    showDeleteButton() {
      return this.dropAmount > 0;
    },
    showResultButtonAvailable() {
      return this.dropAmount !== this.dropSavedAmount;
    },
  },
  methods: {
    addDrop() {
      console.log(this.getDrops);
      this.$store.dispatch("farm/addEmptyDrop", {
        id: Math.random().toString(36).substr(2, 9),
      });
    },
    deleteDrop() {
      this.dropAmount--;
    },
    dropSavedIncriment(incriment = false) {
      if (incriment) {
        this.dropSavedAmount++;
      } else {
        this.dropSavedAmount--;
      }
    },
  },
};
</script>

<style scoped>
.actions {
  margin: 1rem;
  display: flex;
  justify-content: space-between;
}
.actions div {
  display: flex;
  justify-content: center;
}
</style>
