<template>
  <v-card class="mx-auto place-card">
    <div class="place-card__img-container">
      <responsive-image
        class="place-card__img-container__img"
        :content="responsiveImageContent"
        :height="200"
        width="100%"
        :loading="loading"
      />
      <v-card-title class="place-card__img-container__title">{{
        place.name
      }}</v-card-title>
    </div>
    <v-card-subtitle class="pb-0"> {{ place.subtitle }}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div style="text-transform: capitalize">
        {{ place.categories.map((category) => category).join() }}
      </div>

      <div>{{ place.location.street }}, {{ place.location.commune }}</div>
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
import { ResponsiveImageContent } from '~/helpers/image-utils'

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
    responsiveImageContent: {
      type: Object as () => ResponsiveImageContent,
      required: true,
    },
  },
})
</script>
<style scoped>
.place-card {
  max-height: 348px;
  height: 348px;
}
.place-card__img-container {
  display: flex;
  height: 200px;
  max-height: 200px;
  width: 100%;
}
.place-card__img-container__img {
  width: 100%;
  position: absolute;
}

.place-card__img-container__title {
  z-index: 1;
  align-self: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
