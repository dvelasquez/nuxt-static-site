<template>
  <v-container>
    <v-row class="pa-1">
      <v-card class="place-info rounded-xl">
        <responsive-image :height="200" width="100%" :content="image">
        </responsive-image>
        <v-card-text class="flex-row">
          <v-row>
            <v-col class="pa-1">
              <div class="text-subtitle-2">Nombre</div>
              <div class="text-subtitle-1 font-weight-black">
                {{ place.name }}
              </div>
            </v-col>
            <v-col class="pa-1">
              <div class="text-subtitle-2">Rubro</div>
              <span class="text-subtitle-1 font-weight-black">{{
                place.subtitle
              }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pa-1">
              <div class="text-subtitle-2">Tipo de Comida</div>
              <h6 class="text-subtitle-1 font-weight-black">
                {{ place.food_types }}
              </h6>
            </v-col>
            <v-col class="pa-1">
              <div class="text-subtitle-2">Horario Atención</div>
              <h6 class="text-subtitle-1 font-weight-black">
                {{ place.working_hours }}
              </h6>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pa-1">
              <p class="text-caption">
                {{ place.location.street }} - {{ place.location.commune }}
              </p>
              <p class="text-subtitle-2">Sucursales</p>
              <p class="text-subtitle-2">{{ place.payment_methods }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pa-1">
              <div v-if="place.phone">
                <p
                  v-for="(phone, index) in place.phone"
                  :key="index"
                  class="text-caption"
                >
                  <v-icon color="primary">{{ mdiWhatsapp }}</v-icon> {{ phone }}
                </p>
              </div>

              <p class="text-caption">{{ place.web }}</p>
              <p class="text-caption">
                <v-icon v-if="place.facebook">{{ mdiFacebook }}</v-icon>
                <v-icon v-if="place.instagram">{{ mdiInstagram }}</v-icon>
              </p>
              <p class="text-caption">
                <v-icon color="primary">{{ mdiStarOutline }}</v-icon
                ><span class="font-weight-black">Agregar a favorito</span>
              </p>
            </v-col>
            <v-col class="pa-1">
              <p>Como llegar?</p>
              <v-img :src="computedLocationMap" />
            </v-col>
          </v-row>
        </v-card-text> </v-card></v-row
  ></v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import {
  mdiFacebook,
  mdiInstagram,
  mdiStar,
  mdiStarOutline,
  mdiWhatsapp,
} from '@mdi/js'
import { Place } from '~/content/places'
import { ResponsiveImageContent } from '~/helpers/image-utils'
import { getStaticMapImage, MapFormat } from '~/helpers/gmap-static-utils'
import { GOOGLE_MAP_API_KEY } from '~/helpers/gmap-utils'

export default Vue.extend({
  props: {
    place: {
      type: Object as () => Place,
      required: true,
    },
    image: {
      type: Object as () => ResponsiveImageContent,
      required: true,
    },
  },
  data: () => ({
    mdiFacebook,
    mdiInstagram,
    mdiStar,
    mdiStarOutline,
    mdiWhatsapp,
  }),
  computed: {
    computedLocationMap(): string {
      const staticMapLink = getStaticMapImage({
        markers: [
          {
            location: this.place.location.coordinates,
            label: this.place.name.substring(0, 1).toUpperCase(),
          },
        ],
        zoom: 15,
        size: '165x138',
        key: GOOGLE_MAP_API_KEY,
        format: MapFormat.PNG,
      })
      return staticMapLink.scale2x
    },
  },
})
</script>
<style>
.place-info {
  width: 100%;
}
</style>
