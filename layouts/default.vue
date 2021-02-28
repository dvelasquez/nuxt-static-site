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
    <v-footer v-if="showFooter" :absolute="!fixed" app>
      <span>Panor.am&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import {
  mdiMenu,
  mdiApplication,
  mdiApps,
  mdiMapMarker,
  mdiTune,
} from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false,
    showFooter: false,
    items: [
      {
        icon: mdiApps,
        title: 'Lugares',
        to: '/',
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
  mounted() {
    import(
      // @ts-ignore
      /* webpackIgnore: true */ 'https://www.googletagmanager.com/gtag/js?id=G-WYW56VRCNE'
    )
  },
})
</script>
