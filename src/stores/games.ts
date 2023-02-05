import { defineStore } from 'pinia';
import axios from 'axios';
import xmlJs from 'xml-js';

export const useGamesStore = defineStore('gameStore', {
    state: () => ({
        games: <any>[]
    }),

    actions: {        
        getGames() {
            let url = 'https://www.boardgamegeek.com/xmlapi2/collection?username=jammymonkey&own=1'

            interface game {
                imageUrl: string,
                name: string,
                plays: string,
                thumbnail: string,
                status: object,
                yearPublished: string
            };

            axios.get(url).then((data) => {
                let jsonResult = xmlJs.xml2json(data.data, {compact: true, spaces: 4});
                let json = JSON.parse(jsonResult)
                let gamesToAdd: game[] = []; 
                
                json.items.item.forEach((game: any) => {
                    let gameToAdd = <game>{
                        imageUrl: game.image._text,
                        name: game.name._text,
                        plays: game.numplays._text,
                        thumbnail: game.thumbnail._text,
                        status: game.status._attributes,
                        yearPublished: game.yearpublished._text
                    };
                    gamesToAdd.push(gameToAdd);
                });
                this.games = gamesToAdd;
            });
        }
    }
});