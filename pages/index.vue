<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Bienvenido a la vista previa de Panor.am</div>
        <div class="md-subhead">
          Aqui debiese ir un texto presentando o algo
        </div>
      </md-card-header>

      <md-card-actions>
        <v-spacer />
        <md-button class="md-raised md-primary" nuxt to="/places">
          Empezar
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
})
</script>
