<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <h2>Nuxt.js Shop</h2>

    <ul>
      <li v-for="place in places" :key="place.slug">
        <nuxt-link :to="place.path"
          >{{ place.title }} -
          {{
            place.categories.map((category) => category.slug).join(', ')
          }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const places = await $content('places').fetch()
    return {
      places,
    }
  },
  watchQuery: true,
}
</script>
