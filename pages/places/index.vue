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
  head() {
    const preloadFirstTwoImages: any[] = []
    // @ts-ignore
    if (this.places.length > 0) {
      // @ts-ignore
      this.places.forEach((place, index) => {
        if (index < 2) {
          preloadFirstTwoImages.push({
            href: place.image,
            as: 'image',
            rel: 'preload',
            type: 'image/jpg',
            crossOrigin: 'crossorigin',
          })
          preloadFirstTwoImages.push({
            href: place.image.replace('.jpg', '.webp'),
            as: 'image',
            rel: 'preload',
            type: 'image/webp',
            crossOrigin: 'crossorigin',
          })
        }
      })
    }
    return {
      // @ts-ignore
      title: this.places.length + ' lugares donde quitar el hambre',
      // link: preloadFirstTwoImages,
    }
  },
})
</script>
