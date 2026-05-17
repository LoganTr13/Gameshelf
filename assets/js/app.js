import { Library } from "./core/Library.js";
import { Shelf } from "./core/Shelf.js";
import { StorageManager } from "./core/StorageManager.js";
import { ShelfRenderer } from "./ui/ShelfRenderer.js";
import { ModelManager } from "./core/ModelManager.js";

class App {

    constructor() {
        this.libraryContainer = document.getElementById("library-container");
        this.library = new Library();
    }

    async initialize() {

        const data = await StorageManager.loadShelves();

        data.shelves.forEach(shelfData => {

            const parsedShelf = ModelManager.createShelf(shelfData);

            const shelf = new Shelf(
                parsedShelf.title,
                parsedShelf.games
            );

            this.library.addShelf(shelf);

        });

        this.render();
    }

    render() {
        this.library.shelves.forEach(shelf => {
            ShelfRenderer.render(this.libraryContainer, shelf);
        });

    }

}

const app = new App();
app.initialize();