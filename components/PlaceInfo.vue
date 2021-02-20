<template>
  <v-container>
    <v-row justify="space-around">
      <v-card class="place-info">
        <responsive-image :height="200" width="100%" :content="image">
          <v-card-title class="mt-0">
            <v-avatar size="56" tile>
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              />
            </v-avatar>
          </v-card-title>
        </responsive-image>

        <v-card-text class="flex-row">
          <v-row>
            <v-col>
              <div class="text-caption">Nombre</div>
              <h6 class="text-h6 font-weight-black">{{ place.name }}</h6>
            </v-col>
            <v-col>
              <div class="text-caption">Rubro</div>
              <h6 class="text-h6 font-weight-black">{{ place.subtitle }}</h6>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="text-caption">Tipo de Comida</div>
              <h6 class="text-h6 font-weight-black">{{ place.food_types }}</h6>
            </v-col>
            <v-col>
              <div class="text-caption">Horario Atención</div>
              <h6 class="text-h6 font-weight-black">
                {{ place.working_hours }}
              </h6>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="text-caption">
                {{ place.location.street }} - {{ place.location.commune }}
              </p>
              <p class="text-caption">Sucursales</p>
              <p class="text-caption">{{ place.payment_methods }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p v-if="place.phone" class="text-caption">
                {{ place.phone.join(',') }}
              </p>
              <p class="text-caption">{{ place.web }}</p>
              <p class="text-caption">
                <v-icon v-if="place.facebook">{{ mdiFacebook }}</v-icon>
                <v-icon v-if="place.instagram">{{ mdiInstagram }}</v-icon>
              </p>
              <p class="text-caption">
                Agregar a favoritos <v-icon>{{ mdiHeart }}</v-icon>
              </p>
            </v-col>
            <v-col>
              <p>WAZE/Maps</p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card></v-row
    ></v-container
  >
</template>
<script lang="ts">
import Vue from 'vue'
import { mdiInstagram, mdiFacebook, mdiHeart } from '@mdi/js'
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
    mdiHeart,
  }),
})
</script>
<style>
.place-info {
  width: 100%;
}
</style>
