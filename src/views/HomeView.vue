<script setup lang="ts">
import { onMounted } from 'vue'
import { useGamesStore } from '../stores/games';

const gamesStore = useGamesStore();

onMounted(() => {
  gamesStore.getGames();
});
</script>

<template>
  <v-card width="400" class="mt-5 ml-5">
      <v-card-item>
        <v-card-title>Welcome to the Game Picker!</v-card-title>
        <v-card-subtitle>Want to play a game but can't decide which one?</v-card-subtitle>
      </v-card-item>

      <v-card-text>
      Enter your BGG username and you can randomly select a game to play from your collection.
      No idea what any of this nonsense is about? Click for help.
      </v-card-text>
    </v-card>

    <!-- 1 - Update data being recieved (in games.ts) to create objects of the elements actually  needed
    2 - Display some data on screen
    3 - Change call so that it uses a username entered -->
</template>