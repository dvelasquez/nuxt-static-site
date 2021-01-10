<template>
  <v-app dark>
    <LazyNavigationDrawer
      v-if="drawer"
      :clipped="clipped"
      :items="items"
      :drawer="drawer"
    />
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>{{ icons.mdiMenu }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>Panor.am&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { mdiMenu, mdiApplication, mdiApps, mdiFood } from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
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
      },
    }
  },
})
</script>
