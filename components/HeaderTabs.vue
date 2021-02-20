<template>
  <v-tabs align-with-title>
    <v-tab v-for="(tab, index) in tabItems" :key="index">{{ tab.name }}</v-tab>
  </v-tabs>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    tabItems: [
      {
        name: 'Restaurant',
      },
      {
        name: 'Bar',
      },
      {
        name: 'Cafeterias',
      },
      {
        name: 'Pasteleria',
      },
      {
        name: 'Botilleria',
      },
    ],
  }),
})
</script>
<style>
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none;
}
</style>
