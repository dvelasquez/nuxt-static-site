<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <h2>Nuxt.js List</h2>
    <div v-for="(place, index) in places" :key="place.slug">
      <place-card
        :place="place"
        :loading="index < 2 ? 'eager' : 'lazy'"
        :responsive-image-content="images[place.slug]"
      />
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  getImageThumbnails,
  ResponsiveImageContent,
} from '~/helpers/image-utils'
import { Place } from '~/content/places'

export default Vue.extend({
  async asyncData({ $content }) {
    const places = await $content('places').fetch()
    const images: { [key: string]: ResponsiveImageContent } = {}
    places.forEach((place: Place) => {
      images[place.slug] = getImageThumbnails('./content/places', place.image)
    })
    return {
      places,
      images,
    }
  },
  head() {
    const preloadFirstTwoImages: any[] = []
    // @ts-ignore
    if (this.places.length > 0) {
      // @ts-ignore
      this.places.forEach((place, index) => {
        if (index < 2) {
          // @ts-ignore
          const placeImages = this.images[place.slug]
          if (placeImages) {
            Object.entries(placeImages).forEach(([imageType, images]: any) => {
              Object.entries(images).forEach(([, image]: any) => {
                if (image && image.media && image.url) {
                  preloadFirstTwoImages.push({
                    href: image.url,
                    as: 'image',
                    rel: 'preload',
                    media: image.media,
                    type: `image/${imageType}`,
                    crossOrigin: 'crossorigin',
                  })
                }
              })
            })
          }
        }
      })
    }
    return {
      // @ts-ignore
      title: this.places.length + ' lugares donde quitar el hambre',
      link: preloadFirstTwoImages,
    }
  },
})
</script>
