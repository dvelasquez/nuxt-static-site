<template>
  <place-info :place="place" :image="image"></place-info>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'
import { getImageFull } from '~/helpers/image-utils'

export default Vue.extend({
  async asyncData({ $content, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [place] = (await $content({ deep: true })
      .where({ path })
      .fetch()) as IContentDocument[]

    const image = getImageFull('./content/places', place.image)
    if (!place) {
      return error({ statusCode: 404, message: 'Article not found' })
    }
    return {
      place,
      image,
    }
  },
})
</script>
