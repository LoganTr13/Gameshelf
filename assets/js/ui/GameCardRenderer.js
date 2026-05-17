export class GameCardRenderer {

    static create(game) {

        const gameElement = document.createElement("div");
        gameElement.classList.add("game-card");

        gameElement.innerHTML = `
            <img class="game-spine" src="${game.spineImage}" alt="${game.name}">
            <img class="game-cover" src="${game.coverImage}" alt="${game.name}">
        `;

        return gameElement;
    }

}