<template>
  <v-row justify="center" align="center" class="ma-2">
    <v-col
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
    <v-btn icon size="small" class="delete-button" @click="deleteDrop">
      <v-icon color="red" icon="mdi-minus-circle"></v-icon>
    </v-btn>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      disableTextField: false,
      name: "",
      chance: null,
      cost: null,
    };
  },
  computed: {
    ...mapGetters("farm", ["getDrops"]),
    buttonCuption() {
      return !this.disableTextField ? "Save" : "Change";
    },
  },
  methods: {
    ...mapActions("farm", ["changeDrop"]),
    toggleTextField() {
      this.disableTextField = !this.disableTextField;
    },
    saveDrop() {
      this.disableTextField = true;
      // Set data to state.drops
      this.$store.dispatch("farm/changeDrop", {
        id: this.id,
        name: this.name,
        chance: this.chance,
        cost: this.cost,
      });
      console.log("ID ", this.id);
      console.log(this.getDrops);
      // Set emit to DropRate that Drop item was saved
      this.$emit("drop-save");
    },
    changeDrop() {
      this.disableTextField = false;
      this.$emit("change-save");
    },
    deleteDrop() {
      // Вызов mutatuion
      this.$store.commit("farm/deleteDrop", {
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
.delete-button {
  margin: 0.75rem;
}
</style>
