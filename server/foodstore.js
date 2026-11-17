// Stores food items in memory using a single shared instance.
class FoodStore {
    constructor() {
        if (FoodStore.instance) {
            return FoodStore.instance;
        }

        this.foods = [
            { id: 1, name: "Pizza", price: 12.99 },
            { id: 2, name: "Burger", price: 8.99 },
            { id: 3, name: "Salad", price: 6.99 },
            { id: 4, name: "Pasta", price: 10.99 },
            { id: 5, name: "Sandwich", price: 7.99 }
        ];

        FoodStore.instance = this;
    }

    // Returns all food items.
    getAll() {
        return this.foods;
    }
}

// Exports one shared instance for the application to use.
module.exports = new FoodStore();