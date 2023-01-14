<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar color="blue-lighten-2">
      <v-app-bar-title>Boardgame picker</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer class="bg-blue-lighten-1">
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Paul Duvall</strong>
      </v-col>
      </v-row>
    </v-footer>
  </v-app>
  <!-- <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->


</template>

<style scoped>
</style>
