<template>
  <v-row justify="center" align="center" class="ma-2">
    <v-col cols="4"
      ><v-text-field
        :disabled="disableTextField"
        label="Название"
        v-model.trim="name"
      ></v-text-field
    ></v-col>
    <v-col cols="3"
      ><v-text-field
        :disabled="disableTextField"
        type="number"
        label="Шанс"
        v-model.number="chance"
      ></v-text-field
    ></v-col>
    <v-col cols="3"
      ><v-text-field
        :disabled="disableTextField"
        type="number"
        label="Стоимость"
        v-model.number="cost"
      ></v-text-field
    ></v-col>
    <base-button v-if="!disableTextField" @click="saveDrop">Save</base-button>
    <base-button v-else @click="changeDrop">Change</base-button>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      disableTextField: false,
      name: "",
      chance: null,
      cost: null,
    };
  },
  computed: {
    buttonCuption() {
      return !this.disableTextField ? "Save" : "Change";
    },
  },
  methods: {
    ...mapActions("farm", ["addDrop"]),
    toggleTextField() {
      this.disableTextField = !this.disableTextField;
    },
    saveDrop() {
      this.disableTextField = true;
      // Set data to state.drops
      this.addDrop({
        name: this.name,
        chance: this.chance,
        cost: this.cost,
      });
      // Set emit to DropRate that Drop item was saved
      this.$emit("drop-save");
    },
    changeDrop() {
      this.disableTextField = false;
      this.$emit("change-save");
    },
  },
};
</script>

<style scoped></style>
