<template>
  <ui-card outlined>
    <ui-card-content>
      <ui-card-media>
        <responsive-image
          :content="responsiveImageContent"
          :height="200"
          width="100%"
          :loading="loading"
        />
      </ui-card-media>
      <h2 :class="$tt('headline5')">
        {{ place.name }}
      </h2>
      <div :class="$tt('subtitle2')">
        <ui-icon>location_on</ui-icon>
        <span>2 km</span>
      </div>
      <div style="text-transform: capitalize" :class="$tt('subtitle2')">
        {{ place.categories.map((category) => category).join() }}
      </div>

      <div :class="$tt('subtitle2')">
        {{ place.location.street }}, {{ place.location.commune }}
      </div>
    </ui-card-content>
    <ui-card-actions>
      <ui-button>Compartir</ui-button>
      <ui-link class="md-accent" :to="`/places/${place.slug}`"
        >Mas información</ui-link
      >
    </ui-card-actions>
  </ui-card>
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
