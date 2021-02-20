<template>
  <v-app>
    <LazyNavigationDrawer
      v-if="drawer"
      :clipped="clipped"
      :items="items"
      :drawer="drawer"
    />
    <v-app-bar :clipped-left="clipped" fixed app elevation="0">
      <v-btn
        icon
        aria-label="menu"
        color="primary"
        @click.stop="drawer = !drawer"
      >
        <v-icon>{{ icons.mdiMenu }}</v-icon>
      </v-btn>
      <v-text-field
        label="Buscar por nombre, categoría"
        solo
        dense
        rounded
        hide-details
      ></v-text-field>
      <v-btn icon aria-label="menu" color="primary">
        <v-icon>{{ icons.mdiTune }}</v-icon>
      </v-btn>
      <v-btn icon aria-label="menu" color="primary">
        <v-icon>{{ icons.mdiMapMarker }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>Panor.am&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {
  mdiMenu,
  mdiApplication,
  mdiApps,
  mdiFood,
  mdiMapMarker,
  mdiTune,
} from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false,
    items: [
      {
        icon: mdiApps,
        title: 'Bienvenido',
        to: '/',
      },
      {
        icon: mdiFood,
        title: 'Lugares',
        to: '/places',
      },
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: 'Panor.am',
    icons: {
      mdiMenu,
      mdiApplication,
      mdiApps,
      mdiMapMarker,
      mdiTune,
    },
  }),
})
</script>
