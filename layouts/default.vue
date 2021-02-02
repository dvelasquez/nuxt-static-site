<template>
  <div class="page--top-app-bar">
    <ui-top-app-bar
      content-selector="#content-main"
      :type="type"
      :title="title"
      @nav="showDrawer"
    />

    <ui-drawer v-model="openDrawer" type="modal">
      <ui-drawer-header>
        <ui-drawer-title>Header here</ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-list>
          <ui-item active>
            <ui-item-first-content>
              <ui-icon>arrow_back</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>Back</ui-item-text-content>
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
      type: 0,
      title: 'Panor.am',
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
<style>
body {
  margin: 0;
}
</style>
