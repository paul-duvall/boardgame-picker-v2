<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();

const { test } = storeToRefs(appStore);
</script>

<template>
  <v-card width="400" class="mt-5 ml-5">
      <v-card-item>
        {{ test }}
        <v-card-title>Welcome to the Game Picker!</v-card-title>
        <v-card-subtitle>Want to play a game but can't decide which one?</v-card-subtitle>
      </v-card-item>

      <v-card-text>
      Enter your BGG username and you can randomly select a game to play from your collection.
      No idea what any of this nonsense is about? Click for help.
      </v-card-text>
    </v-card>

    <!-- 1 - set up a simple landing page
    2 - get pinia working
    3 - pull in data from bgg and save to pinia store -->
</template>