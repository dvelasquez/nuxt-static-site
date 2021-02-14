<template>
  <ui-grid>
    <ui-grid-cell>
      <ui-tab-bar v-model="active" class="hero-demo-tab-bar">
        <ui-tab v-for="(item, index) in list" :key="index">{{ item }}</ui-tab>
      </ui-tab-bar>
    </ui-grid-cell>
    <ui-grid-cell>
      <ui-card outlined>
        <div>
          <h1 :class="$tt('headline5')">
            Bienvenido a la vista previa de Panor.am
          </h1>
          <ui-list-divider></ui-list-divider>
          <div :class="$tt('subtitle2')">
            Aqui debiese ir un texto presentando o algo
          </div>
        </div>

        <ui-card-actions full-bleed>
          <ui-link to="/places" raised>
            Empezar
            <template #after>
              <ui-icon>arrow_forward</ui-icon>
            </template>
          </ui-link>
        </ui-card-actions>
      </ui-card>
    </ui-grid-cell>
  </ui-grid>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
  data() {
    return {
      active: 1,
      list: ['Restaurant', 'Bar', 'Cafetería', 'Pastelería', 'Botillería'],
    }
  },
})
</script>
<style lang="scss">
//@use '~@material/tab-bar' with (
//$density-scale: density-variables.$default-scale
//);
</style>
