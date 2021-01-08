<template>
  <v-card class="mx-auto" max-width="400">
    <responsive-image
      :image-name="place.image"
      image-path="./content/places"
      :height="200"
      width="100%"
    />
    <v-card-title>{{ place.name }}</v-card-title>
    <v-card-subtitle class="pb-0"> {{ place.subtitle }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div style="text-transform: capitalize">
        {{ place.categories.map((category) => category).join() }}
      </div>

      <div>{{ place.location.fullAddress }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text> Compartir</v-btn>

      <v-btn color="orange" text> Mas información</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Place } from '~/content/places'

export default defineComponent({
  props: {
    place: {
      type: Object as () => Place,
      required: true,
    },
    loading: {
      type: String as () => 'lazy' | 'eager',
      required: false,
      default: 'lazy',
    },
  },
})
</script>
