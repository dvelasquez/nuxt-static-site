<template>
  <ui-grid>
    <ui-grid-cell
      v-for="(place, index) in places"
      :key="place.slug"
      class="places__items"
    >
      <place-card
        :place="place"
        :loading="index < 2 ? 'eager' : 'lazy'"
        :responsive-image-content="images[place.slug]"
      />
      <br />
    </ui-grid-cell>
  </ui-grid>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  getImageThumbnails,
  getPreloadLinks,
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
    let preloadFirstTwoImages: any[] = []
    // @ts-ignore
    if (this.places.length > 0) {
      // @ts-ignore
      this.places.forEach((place, index) => {
        if (index < 2) {
          // @ts-ignore
          const placeImages = this.images[place.slug]
          preloadFirstTwoImages = getPreloadLinks(placeImages)
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
<style>
.places__items {
  content-visibility: auto;
  contain-intrinsic-size: 450px;
  height: 450px;
  max-height: 450px;
}
</style>
