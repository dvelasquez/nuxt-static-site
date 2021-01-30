<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{ title }}</span>
    </md-toolbar>
    <LazyNavigationDrawer
      v-if="showNavigation"
      :items="items"
      :show-navigation="showNavigation"
      @change-show-navigation="updateShowNavigation"
    />
    <md-content>
      <nuxt />
    </md-content>
    <footer>
      <span>Panor.am&copy; {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      showNavigation: false,
      items: [
        {
          icon: 'home',
          title: 'Bienvenido',
          to: '/',
        },
        {
          icon: 'local_dining',
          title: 'Lugares',
          to: '/places',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Panor.am',
    }
  },
  methods: {
    updateShowNavigation(showNavigation: boolean) {
      this.showNavigation = showNavigation
    },
  },
})
</script>
<style scoped>
.md-content {
  padding: 1rem;
}
</style>
