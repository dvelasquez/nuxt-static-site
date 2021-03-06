<template>
  <div>
    <header-tabs></header-tabs>
    <lazy-map-container
      v-if="mapEnabled"
      :places="$data.places"
      :api-key="$data.apiKey"
    ></lazy-map-container>
    <div v-if="!mapEnabled">
      <div
        v-for="(place, index) in $data.places"
        :key="place.slug"
        class="places__item"
      >
        <place-list-card
          :place="place"
          :loading="index < 2 ? 'eager' : 'lazy'"
          :responsive-image-content="images[place.slug]"
        />
        <br />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  getImageThumbnails,
  getPreloadLinks,
  ResponsiveImageContent,
} from '~/helpers/image-utils'
import { Place } from '~/content/places'
import {
  getGoogleMapPrefetchLink,
  GOOGLE_MAP_API_KEY,
} from '~/helpers/gmap-utils'

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
      apiKey: GOOGLE_MAP_API_KEY,
    }
  },
  head() {
    let preloadFirstTwoImages: any[] = []
    if (this.$data.places.length > 0) {
      this.$data.places.forEach((place: Place, index: number) => {
        if (index < 2) {
          const placeImages = this.$data.images[place.slug]
          preloadFirstTwoImages = getPreloadLinks(placeImages)
        }
      })
    }
    return {
      title: `${this.$data.places.length} lugares donde quitar el hambre`,
      link: [...preloadFirstTwoImages, getGoogleMapPrefetchLink()],
    }
  },
  computed: {
    mapEnabled() {
      return this.$store.state.mapEnabled
    },
  },
})
</script>
<style lang="scss">
.places {
  &__items {
    content-visibility: auto;
    contain-intrinsic-size: 372px;
    height: 372px;
    max-height: 372px;
  }
}
</style>
