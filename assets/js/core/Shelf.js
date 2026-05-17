export class Shelf {
    constructor(title, games = []) {
        this.title = title;
        this.games = games;
    }

    addGame(game) {
        this.games.push(game);
    }
}