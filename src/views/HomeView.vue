<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGamesStore } from '../stores/games';

const gamesStore = useGamesStore();

const username = ref('');

// onMounted(() => {
//   gamesStore.getGames(username.value);
// });

const getCollection = () => {
  gamesStore.getGames(username.value);
};
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

    <v-text-field v-model="username" label="BGG Username" />
    <v-btn elevation="2" @click="getCollection()">Get Collection</v-btn>

    <ul>
      <li v-for="game in gamesStore.games">
        {{ game.name }}
      </li>
    </ul>

    <!-- 1 - Update data being recieved (in games.ts) to create objects of the elements actually  needed
    2 - Display some data on screen
    3 - Change call so that it uses a username entered -->
</template>