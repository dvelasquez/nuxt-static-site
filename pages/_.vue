<template>
  <div>
    {{ article }}
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    const path = `/${params.pathMatch || 'index'}`
    const [place] = await $content({ deep: true }).where({ path }).fetch()

    if (!place) {
      return error({ statusCode: 404, message: 'Article not found' })
    }
    return {
      article: place,
    }
  },
}
</script>
