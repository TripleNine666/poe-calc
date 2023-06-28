<!--<div>-->
<!--<v-text-field label="Название"></v-text-field>-->
<!--<v-text-field prefix="мин" label="Время в минутах"></v-text-field>-->
<!--<v-text-field label="Количество"></v-text-field>-->
<!--<v-text-field prefix="chaos" label="Стоимость в хаосах"></v-text-field>-->
<!--</div>-->

<template>
  <base-card>
    <v-card-item>
      <v-card-title>Что ты бегаешь</v-card-title>
      <v-card-subtitle>Впиши все в текстовые поля</v-card-subtitle>
    </v-card-item>
    <form @submit.prevent="submit">
      <v-text-field
          v-model="state.name"
          :error-messages="v$.name.$errors.map(e => e.$message)"
          :counter="10"
          label="Name"
          required
          @input="v$.name.$touch"
          @blur="v$.name.$touch"
      ></v-text-field>

      <v-text-field
          v-model="state.circleTime"
          :error-messages="v$.circleTime.$errors.map(e => e.$message)"
          label="Время в минутах"
          prefix="мин"
          required
          @input="v$.circleTime.$touch"
          @blur="v$.circleTime.$touch"
      ></v-text-field>

      <v-text-field
          v-model="state.circleAmount"
          :error-messages="v$.circleAmount.$errors.map(e => e.$message)"
          label="Количество"
          required
          @change="v$.circleAmount.$touch"
          @blur="v$.circleAmount.$touch"
      ></v-text-field>

      <v-text-field
          v-model="state.cost"
          :error-messages="v$.cost.$errors.map(e => e.$message)"
          label="Стимость"
          prefix="хаос"
          required
          @change="v$.cost.$touch"
          @blur="v$.cost.$touch"
      ></v-text-field>

      <v-btn
          class="me-4"
          @click="v$.$validate"
          type="submit"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </base-card>
</template>


<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const initialState = {
  name: '',
  circleTime: null,
  circleAmount: null,
  cost: null,
}

const state = reactive({
  ...initialState,
})

const rules = {
  name: { required },
  circleTime: { required },
  circleAmount: { required },
  cost: { required }
}

const v$ = useVuelidate(rules, state)

function clear () {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}
function submit(){
  // TODO: add run state + add submit state + make all fields disabled and change buttons to edit button
}
</script>a