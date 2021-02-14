<template>
  <div class="page--top-app-bar">
    <ui-top-app-bar
      id="top-app-bar"
      content-selector="#content-main"
      :type="type"
      @nav="showDrawer"
    >
      <template #toolbar>
        <ui-icon-button
          icon="search"
          class="mdc-theme--primary"
        ></ui-icon-button
        ><ui-icon-button icon="tune" class="mdc-theme--primary"></ui-icon-button
        ><ui-icon-button
          icon="location_on"
          class="mdc-theme--primary"
        ></ui-icon-button>
      </template>
    </ui-top-app-bar>

    <ui-drawer v-model="openDrawer" type="modal">
      <ui-drawer-header>
        <ui-drawer-title>Opciones</ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-list>
          <ui-item active>
            <ui-item-first-content>
              <ui-icon>home</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>Inicio</ui-item-text-content>
          </ui-item>
          <ui-item>
            <ui-item-first-content>
              <ui-icon>local_dining</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>Lugares</ui-item-text-content>
          </ui-item>
          <ui-list-divider></ui-list-divider>
        </ui-list>
      </ui-drawer-content>
    </ui-drawer>

    <ui-drawer-backdrop></ui-drawer-backdrop>

    <div id="content-main">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      type: 1,
      openDrawer: false,
    }
  },
  methods: {
    showDrawer() {
      this.openDrawer = true
    },
  },
})
</script>
<style lang="scss">
body {
  margin: 0;
}
#top-app-bar {
  background-color: white;
  color: #000;
}
#top-app-bar
  > div
  > section.mdc-top-app-bar__section.mdc-top-app-bar__section--align-start
  > span.mdc-top-app-bar__brand
  > button {
  color: #ee534f;
}
</style>
