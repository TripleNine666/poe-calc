<template>
  <v-row justify="center" class="ma-2">
    <v-col cols="4"
      ><v-text-field
        :disabled="disableTextField"
        label="Название"
        v-model.trim="name"
      ></v-text-field
    ></v-col>
    <v-col cols="4"
      ><v-text-field
        :disabled="disableTextField"
        type="number"
        label="Шанс"
        v-model.number="chance"
      ></v-text-field
    ></v-col>
    <v-col cols="4"
      ><v-text-field
        :disabled="disableTextField"
        type="number"
        label="Стоимость"
        v-model.number="cost"
      ></v-text-field
    ></v-col>
    <base-button @click="toggleTextField">{{ buttonCuption }}</base-button>
  </v-row>
</template>

<script>
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
    toggleTextField() {
      this.disableTextField = !this.disableTextField;
    },
  },
};
</script>
