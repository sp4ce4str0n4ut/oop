import Product from "./Product.js";
import Nutrition from "./Nutrition.js";

/**
 * Класс, объекты которого описывают параметры салата. 
 * 
 * @constructor
 * @param type      Тип
 * @param {number} [weight=100]    Вес в граммах
 */
class Salad extends Product {
    /* Наименование позиции */
    _NAME = 'Salad';

    /* Виды салатов (цена и калории указаны за 100г) */
    static TYPE_CAESAR = new Nutrition({ name: 'caesar', price: 100, calories: 20 });
    static TYPE_OLIVIER = new Nutrition({ name: 'olivier', price: 50, calories: 80 });

    constructor(type, weight = 100) {
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
        if (arguments.length === 0) {
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

    /**
     * Сравнить c другим экземпляром салата
     * @param {Object} other Объект
     */
    equals(other) {
        if (arguments.length === 0) {
            throw new Error('Enter the other object');
        } else if (Object.prototype.toString.call(other) !== "[object Object]") {
            throw new Error('Incorrect parameter type');
        }

        return this._type == other._type && this._weight == other._weight;
    }

    /**
     * Вывести заказ салата
     * @param {Number} index    Индекс заказа
     * @param {Number} amount   Количество
     */
    printItem(index, amount) {
        return console.log(`${index + 1}. ${this._NAME}: ${this._type.name}, ${this._weight}g x${amount}\n`);
    }
}

export default Salad;
