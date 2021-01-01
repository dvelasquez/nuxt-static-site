<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>{{ icons.mdiMenu }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>{{ getChevronIcon(miniVariant) }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>{{ icons.mdiApplication }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>{{ icons.mdiMinus }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>{{ icons.mdiMenu }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> {{ icons.mdiRepeat }} </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {
  mdiMenu,
  mdiApplication,
  mdiMinus,
  mdiRepeat,
  mdiChevronRight,
  mdiChevronLeft,
  mdiChartBubble,
  mdiApps,
  mdiFood,
} from '@mdi/js'
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: mdiApps,
          title: 'Welcome',
          to: '/',
        },
        {
          icon: mdiChartBubble,
          title: 'Inspire',
          to: '/inspire',
        },
        {
          icon: mdiFood,
          title: 'Places',
          to: '/places',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      icons: {
        mdiMenu,
        mdiApplication,
        mdiMinus,
        mdiRepeat,
        mdiChevronRight,
        mdiChevronLeft,
        mdiChartBubble,
        mdiApps,
      },
    }
  },
  methods: {
    getChevronIcon(miniVariant) {
      return miniVariant ? mdiChevronRight : mdiChevronLeft
    },
  },
}
</script>
