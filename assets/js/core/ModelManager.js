import { Game } from "./Game.js";
import { Shelf } from "./Shelf.js";

export class ModelManager {

    static createGame(gameData) {

        return new Game(
            gameData.id,
            gameData.name,
            gameData.spineImage,
            gameData.coverImage
        );

    }

    static createShelf(shelfData) {

        const shelf = new Shelf(shelfData.title);
        shelfData.games.forEach(gameData => {
            const game = this.createGame(gameData);
            shelf.addGame(game);
        });

        return shelf;
    }

}