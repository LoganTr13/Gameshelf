export class Library {
    constructor(shelves = []) {
        this.shelves = shelves;
    }

    addShelf(shelf) {
        this.shelves.push(shelf);
    }
}