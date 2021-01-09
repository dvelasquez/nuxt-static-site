<template>
  <picture>
    <source
      :media="content.avif.w320.media"
      :srcset="content.avif.w320.url"
      type="image/avif"
    />
    <source
      :media="content.avif.w640.media"
      :srcset="content.avif.w640.url"
      type="image/avif"
    />
    <source
      :media="content.avif.w1280.media"
      :srcset="content.avif.w1280.url"
      type="image/avif"
    />
    <source :srcset="content.avif.w1920.url" type="image/avif" />

    <source
      :media="content.webp.w320.media"
      :srcset="content.webp.w320.url"
      type="image/webp"
    />
    <source
      :media="content.webp.w640.media"
      :srcset="content.webp.w640.url"
      type="image/webp"
    />
    <source
      :media="content.webp.w1280.media"
      :srcset="content.webp.w1280.url"
      type="image/webp"
    />
    <source :srcset="content.webp.w1920.url" type="image/webp" />

    <source
      :media="content.jpg.w320.media"
      :srcset="content.jpg.w320.url"
      type="image/jpg"
    />
    <source
      :media="content.jpg.w640.media"
      :srcset="content.jpg.w640.url"
      type="image/jpg"
    />
    <source
      :media="content.jpg.w1280.media"
      :srcset="content.jpg.w1280.url"
      type="image/jpg"
    />
    <source :srcset="content.jpg.w1920.url" type="image/jpg" />

    <img
      style="object-fit: cover"
      height="200"
      width="100%"
      :src="content.jpg.w1920.url"
      :loading="loading"
      decoding="async"
    />
  </picture>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { ResponsiveImageContent } from '~/helpers/image-utils'

export default defineComponent({
  props: {
    height: {
      type: Number as () => number,
      required: true,
    },
    width: {
      type: String as () => string,
      required: true,
    },
    content: {
      type: Object as () => ResponsiveImageContent,
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
