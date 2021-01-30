<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Bienvenido a la vista previa de Panor.am
        </v-card-title>
        <v-card-text> Aqui debiese ir un texto presentando o algo </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/places"> Empezar </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {},
})
</script>
