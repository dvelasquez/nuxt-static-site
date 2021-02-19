<template>
  <v-navigation-drawer
    v-model="internalDrawer"
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
</template>

<script>
export default {
  name: 'LazyNavigationDrawer',
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
    miniVariant: { type: Boolean, default: false },
    clipped: { type: Boolean, default: false },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      internalDrawer: this.drawer,
    }
  },
  mounted() {
    console.log('this wea is mounted')
  },
}
</script>
