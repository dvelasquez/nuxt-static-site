<template>
  <md-drawer :md-active.sync="internalShowNavigation" md-swipeable>
    <md-toolbar class="md-transparent" md-elevation="0">
      <span class="md-title">My App name</span>
    </md-toolbar>

    <md-list>
      <md-list-item
        v-for="(item, index) in items"
        :key="index"
        nuxt
        :to="item.to"
      >
        <md-icon>{{ item.icon }}</md-icon>
        <span class="md-list-item-text">{{ item.title }}</span>
      </md-list-item>
    </md-list>
  </md-drawer>
</template>

<script>
export default {
  name: 'LazyNavigationDrawer',
  props: {
    showNavigation: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      // required: true,
    },
  },
  data() {
    return {
      internalShowNavigation: this.showNavigation,
    }
  },
  watch: {
    internalShowNavigation(val) {
      this.$emit('change-show-navigation', val)
    },
  },
  mounted() {
    console.log('this wea is mounted')
  },
}
</script>
