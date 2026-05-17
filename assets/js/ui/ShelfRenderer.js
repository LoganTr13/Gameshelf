import { GameCardRenderer } from "./GameCardRenderer.js";

export class ShelfRenderer {

    static render(container, shelf) {

        const shelfElement = document.createElement("section");
        shelfElement.classList.add("shelf");

        shelfElement.innerHTML = `
            <h2 class="shelf-title">${shelf.title}</h2>
            <div class="shelf-games"></div>
        `;

        const gamesContainer = shelfElement.querySelector(".shelf-games");

        shelf.games.forEach(game => {
            const gameCard = GameCardRenderer.create(game);
            gamesContainer.appendChild(gameCard);
        });
        console.log(shelfElement);
        container.appendChild(shelfElement);
    }

}