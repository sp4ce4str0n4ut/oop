import MenuItem from "./MenuItem.js";

/**
 * Класс, объекты которого описывают параметры салата. 
 * 
 * @constructor
 * @param type      Тип
 * @param weight    Вес в граммах
 */
class Salad extends MenuItem {
    constructor(type, weight) {
        super(Salad);
        this._type = type;
        this._weight = weight;
    }

    /**
     * Узнать вес салата
     */
    getWeight() {
        return this._weight;
    }

    /**
     * Изменить вес салата
     * @param {number} value Вес в граммах
     */
    setWeight(value) {
        if (arguments.length < 1) {
            throw new Error('Enter weight value');
        }
        this._weight = value;
    }

    /**
     * Узнать цену салата
     * @return {Number} Цена в тугриках
     */
    calculatePrice() {
        return (this._type.price / 100) * this._weight;
    }

    /**
     * Узнать калорийность салата
     * @return {Number} Калорийность в калориях
     */
    calculateCalories() {
        return (this._type.calories / 100) * this._weight;
    }
}

/* Виды салатов (цена и калории указаны за 100г) */
Salad.TYPE_CAESAR = { name: 'caesar', price: 100, calories: 20 };
Salad.TYPE_OLIVIER = { name: 'olivier', price: 50, calories: 80 };

export default Salad;