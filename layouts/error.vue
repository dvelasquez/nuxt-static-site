<template>
  <div>
    <h1 v-if="error.statusCode === 404" class="error-header">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface ErrorProps {
  statusCode: number
}

export default Vue.extend({
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    } as PropOptions<ErrorProps>,
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head(): { title: string } {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
  mounted() {
    import(
      // @ts-ignore
      /* webpackIgnore: true */ 'https://www.googletagmanager.com/gtag/js?id=G-WYW56VRCNE'
    )
  },
})
</script>

<style>
.error-header {
  font-size: 20px;
}
</style>
