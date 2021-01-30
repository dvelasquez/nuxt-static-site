<template>
  <md-card>
    <md-card-area md-inset>
      <md-card-media class="place-card__img-container">
        <responsive-image
          class="place-card__img-container__img"
          :content="responsiveImageContent"
          :height="200"
          width="100%"
          :loading="loading"
        />
        <h2 class="place-card__img-container__title md-title"></h2>
      </md-card-media>
      <md-card-header>
        <h2 class="md-title">{{ place.name }}</h2>
        <div class="md-subhead">
          <md-icon>location_on</md-icon>
          <span>2 km</span>
        </div>
      </md-card-header>

      <md-card-content>
        <div style="text-transform: capitalize">
          {{ place.categories.map((category) => category).join() }}
        </div>

        <div>{{ place.location.street }}, {{ place.location.commune }}</div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary" text> Compartir</md-button>

        <md-button class="md-accent" text> Mas información</md-button>
      </md-card-actions>
    </md-card-area>
  </md-card>
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
