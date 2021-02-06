<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
})
</script>
