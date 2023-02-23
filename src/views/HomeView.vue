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
  <v-container>
    <v-row>
      <v-col>
        <v-card width="400" class="px-5 py-5">
          <v-card-item>
            <v-card-title>Welcome to the Boardgame Picker!</v-card-title>
            <v-card-subtitle>Want to play a game from your collection but can't decide which one?</v-card-subtitle>
          </v-card-item>

          <v-card-text>
          Enter your BGG username and you can randomly select a game to play from your collection.
          No idea what any of this nonsense is about? Click for help.
          </v-card-text>
          <v-text-field v-model="username" label="BGG Username" />
          <v-btn
            elevation="2"
            @click="getCollection()"
            :disabled="username === ''"
          >Get Collection</v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <ul>
          <li v-for="game in gamesStore.games">
            {{ game.name }}
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>