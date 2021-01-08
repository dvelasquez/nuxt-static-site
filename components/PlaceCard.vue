<template>
  <v-card class="mx-auto" max-width="400">
    <picture>
      <source
        type="image/webp"
        media="(max-width: 400)"
        :srcset="
          place.image
            .replace('.jpg', '_400w.webp')
            .replace('places', 'places/webp')
        "
      />
      <source
        type="image/webp"
        media="(max-width: 768)"
        :srcset="
          place.image
            .replace('.jpg', '_768w.webp')
            .replace('places', 'places/webp')
        "
      />
      <source
        type="image/webp"
        :srcset="
          place.image
            .replace('.jpg', '_400w.webp')
            .replace('places', 'places/webp')
        "
      />
      <source
        type="image/jpg"
        media="(max-width: 400)"
        :srcset="
          place.image
            .replace('.jpg', '_400w.jpg')
            .replace('places', 'places/webp')
        "
      />
      <source
        type="image/jpg"
        media="(max-width: 768)"
        :srcset="
          place.image
            .replace('.jpg', '_768w.jpg')
            .replace('places', 'places/jpg')
        "
      />
      <source
        type="image/jpg"
        :srcset="
          place.image
            .replace('.jpg', '_400w.jpg')
            .replace('places', 'places/jpg')
        "
      />
      <img
        style="object-fit: cover"
        height="200"
        width="100%"
        :src="
          place.image
            .replace('.jpg', '_400w.jpg')
            .replace('places', 'places/jpg')
        "
        :loading="loading"
      />
    </picture>
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
