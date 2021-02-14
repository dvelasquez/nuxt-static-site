<template>
  <div>
    <ui-tab-bar v-model="active" class="hero-demo-tab-bar">
      <ui-tab v-for="(item, index) in list" :key="index">{{ item }}</ui-tab>
    </ui-tab-bar>
    <ui-grid v-if="listActive">
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

export default Vue.extend({
  components: {},
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
  data() {
    return {
      active: 1,
      listActive: true,
      mapActive: false,
      list: ['Restaurant', 'Bar', 'Cafetería', 'Pastelería', 'Botillería'],
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
<style lang="scss">
//@use '~@material/density/variables' as density-variables;
//@use '~@material/tab/variables' as tab-variables;
//
//$height: tab-variables.$height;
//$minimum-height: 30px;
//$maximum-height: 30px;

@use '~@material/tab' with (
  $icon-size: 24px,
  $height: 24px,
  $horizontal-padding: 24px,
  $text-label-opacity: 0.6,
  $icon-opacity: 0.54,
);

.places__items {
  content-visibility: auto;
  contain-intrinsic-size: 450px;
  height: 450px;
  max-height: 450px;
}
</style>
