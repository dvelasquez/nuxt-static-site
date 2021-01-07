<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <h2>Nuxt.js List</h2>
    <div v-for="(place, index) in places" :key="place.slug">
      <place-card :place="place" :loading="index < 2 ? 'eager' : 'lazy'" />
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $content }) {
    const places = await $content('places').fetch()
    return {
      places,
    }
  },
})
</script>
