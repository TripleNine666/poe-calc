<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/15.jpg"
        title="Kirill Kolubovich"
        subtitle="kolumb1709@gmail.com"
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-image" title="My Files" value="myfiles" />
    </v-list>
  </v-navigation-drawer>
</template>
