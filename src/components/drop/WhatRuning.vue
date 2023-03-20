<template>
  <base-card>
    <v-card-item>
      <v-card-title>Что ты бегаешь</v-card-title>
      <v-card-subtitle>Впиши все в текстовые поля</v-card-subtitle>
    </v-card-item>
    <div>
      <v-text-field label="Название"></v-text-field>
      <v-text-field prefix="мин" label="Время в минутах"></v-text-field>
      <v-text-field label="Количество"></v-text-field>
      <v-text-field prefix="chaos" label="Стоимость в хаосах"></v-text-field>
    </div>
  </base-card>
</template>
