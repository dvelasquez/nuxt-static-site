<template>
  <div>
    <p>{{ place }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  async asyncData({ $content, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [place] = (await $content({ deep: true })
      .where({ path })
      .fetch()) as IContentDocument[]

    if (!place) {
      return error({ statusCode: 404, message: 'Article not found' })
    }
    return {
      place,
    }
  },
})
</script>
