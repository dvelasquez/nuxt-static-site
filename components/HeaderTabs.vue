<template>
  <v-tabs v-model="selectedTab" align-with-title>
    <v-tab
      v-for="(tab, index) in tabItems"
      :key="index"
      :class="{
        primary: index === selectedTab,
        'white--text': index === selectedTab,
      }"
      >{{ tab.name }}</v-tab
    >
  </v-tabs>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    selectedTab: 0,
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
