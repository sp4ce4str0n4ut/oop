import MenuItem from "./MenuItem.js";

/**
 * Класс, объекты которого описывают параметры напитка. 
 * 
 * @constructor
 * @param type  Тип
 */
class Drink extends MenuItem {
    constructor(type) {
        super(Drink);
        this._type = type;
    }

    /**
     * Узнать цену напитка
     * @returns {number} Цена в тугриках
     */
    calculatePrice() {
        return this._type.price;
    }

    /**
     * Узнать калорийность напитка
     * @returns {number} Калорийность в калориях
     */
    calculateCalories() {
        return this._type.calories;
    }
}

/* Виды напитков */
Drink.TYPE_COLA = { name: 'ice cola', price: 50, calories: 40 };
Drink.TYPE_COFFEE = { name: 'black coffee', price: 80, calories: 20 };

export default Drink;