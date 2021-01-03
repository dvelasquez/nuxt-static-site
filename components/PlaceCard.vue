<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      loading="lazy"
      :src="place.image"
    >
      <v-card-title>{{ place.name }}</v-card-title>
    </v-img>

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
import { Place } from '~/content/places/Places'

export default defineComponent({
  props: {
    place: {
      type: Object as () => Place,
      required: true,
    },
  },
})
</script>
