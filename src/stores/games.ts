import { defineStore } from 'pinia';
import axios from 'axios';
import xmlJs from 'xml-js';

export const useGamesStore = defineStore('gameStore', {
    state: () => ({
        games: []
    }),

    actions: {
        getGames() {
            let url = 'https://www.boardgamegeek.com/xmlapi2/collection?username=jammymonkey&own=1'
            axios.get(url).then((data) => {
                let jsonResult = xmlJs.xml2json(data.data, {compact: true, spaces: 4});
                let json = JSON.parse(jsonResult)
                this.games = json.items.item;
            })
        }
    }
});