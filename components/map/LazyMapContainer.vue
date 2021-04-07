<template>
  <div>
    <div ref="googleMap" class="map-container"></div>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-undef */
import Vue from 'vue'
import { Loader } from '@googlemaps/js-api-loader'
import { Place } from '~/content/places'

export default Vue.extend({
  props: {
    mapConfig: Object,
    apiKey: String,
    places: Array as () => Place[],
  },
  data() {
    return {
      map: null as google.maps.Map | null,
      google: null,
    }
  },
  async mounted() {
    const loader = new Loader({
      apiKey: this.apiKey,
      version: 'weekly',
    })
    await loader.load()
    const mapContainer = this.$refs.googleMap
    this.map = new google.maps.Map(mapContainer as Element, {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 4,
    })
  },
})
</script>
<style>
.map-container {
  width: 100%;
  height: calc(100vh - 104px);
}
</style>
