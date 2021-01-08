<template>
  <picture>
    <source
      media="(max-width: 320px)"
      :srcset="`${computedImages.avif.w320}`"
      type="image/avif"
    />
    <source
      media="(max-width: 640px)"
      :srcset="`${computedImages.avif.w640}`"
      type="image/avif"
    />
    <source
      media="(max-width: 1280px)"
      :srcset="`${computedImages.avif.w1280}`"
      type="image/avif"
    />
    <source :srcset="`${computedImages.avif.original}`" type="image/avif" />

    <source
      media="(max-width: 320px)"
      :srcset="`${computedImages.webp.w320}`"
      type="image/webp"
    />
    <source
      media="(max-width: 640px)"
      :srcset="`${computedImages.webp.w640}`"
      type="image/webp"
    />
    <source
      media="(max-width: 1280px)"
      :srcset="`${computedImages.webp.w1280}`"
      type="image/webp"
    />
    <source :srcset="`${computedImages.webp.original}`" type="image/webp" />

    <source
      media="(max-width: 320px)"
      :srcset="`${computedImages.jpg.w320}`"
      type="image/jpg"
    />
    <source
      media="(max-width: 640px)"
      :srcset="`${computedImages.jpg.w640}`"
      type="image/jpg"
    />
    <source
      media="(max-width: 1280px)"
      :srcset="`${computedImages.jpg.w1280}`"
      type="image/jpg"
    />
    <source :srcset="`${computedImages.jpg.original}`" type="image/jpg" />

    <img
      style="object-fit: cover"
      height="200"
      width="100%"
      :src="computedImages.jpg.original"
      :loading="loading"
      decoding="async"
    />
  </picture>
</template>
<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'

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
    imageName: {
      type: String as () => string,
      required: true,
    },
    imagePath: {
      type: String as () => string,
      required: true,
    },
    loading: {
      type: String as () => 'lazy' | 'eager',
      required: false,
      default: 'lazy',
    },
  },
  setup(props) {
    const computedImages = computed(() => ({
      jpg: {
        original: `${props.imagePath}/jpg/${props.imageName}.jpg`,
        w1280: `${props.imagePath}/jpg/${props.imageName}_1280w.jpg`,
        w640: `${props.imagePath}/jpg/${props.imageName}_640w.jpg`,
        w320: `${props.imagePath}/jpg/${props.imageName}_320w.jpg`,
      },
      webp: {
        original: `${props.imagePath}/webp/${props.imageName}.webp`,
        w1280: `${props.imagePath}/webp/${props.imageName}_1280w.webp`,
        w640: `${props.imagePath}/webp/${props.imageName}_640w.webp`,
        w320: `${props.imagePath}/webp/${props.imageName}_320w.webp`,
      },
      avif: {
        original: `${props.imagePath}/avif/${props.imageName}.avif`,
        w1280: `${props.imagePath}/avif/${props.imageName}_1280w.avif`,
        w640: `${props.imagePath}/avif/${props.imageName}_640w.avif`,
        w320: `${props.imagePath}/avif/${props.imageName}_320w.avif`,
      },
    }))
    return {
      computedImages,
    }
  },
})
</script>
