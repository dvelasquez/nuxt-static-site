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
  mdiInstagram,
  mdiFacebook,
  mdiStar,
  mdiStarOutline,
  mdiWhatsapp,
} from '@mdi/js'
import { Place } from '~/content/places'
import { ResponsiveImageContent } from '~/helpers/image-utils'
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
    computedLocationMap() {
      const mapLink =
        'https://maps.googleapis.com/maps/api/staticmap?markers=color:green%7Clabel:'
      const zoom = 15
      const coordinates = `${this.place.location.coordinates.latitude}, ${this.place.location.coordinates.longitude}`
      const size = '165x138'
      const key = 'AIzaSyCmYLD0dkgSUN4aWETYjQ-g1DNL5B4IBsE'
      return `${mapLink}Ubicacion%7C${coordinates}&zoom=${zoom}&size=${size}&key=${key}`
    },
  },
})
</script>
<style>
.place-info {
  width: 100%;
}
</style>
