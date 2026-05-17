export class StorageManager {

    static async loadShelves() {
        const response = await fetch("./assets/js/data/shelves.json");
        return await response.json();
    }

}