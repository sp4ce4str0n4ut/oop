import Product from "./Product.js";
import Nutrition from "./Nutrition.js";

/**
 * Класс, объекты которого описывают параметры напитка. 
 * 
 * @constructor
 * @param type  Тип
 */
class Drink extends Product {
    /* Наименование позиции */
    _NAME = 'Drink';

    /* Виды напитков */
    static TYPE_COLA = new Nutrition({ name: 'ice cola', price: 50, calories: 40 });
    static TYPE_COFFEE = new Nutrition({ name: 'black coffee', price: 80, calories: 20 });

    constructor(type) {
        super(Drink);
        this._type = type;
    }

    /**
     * Сравнить c другим экземпляром напитка
     * @param {Object} other Объект
     */
    equals(other) {
        if (arguments.length === 0) {
            throw new Error('Enter the other object');
        } else if (Object.prototype.toString.call(other) !== "[object Object]") {
            throw new Error('Incorrect parameter type');
        }

        return this._type == other._type;
    }

    /**
     * Вывести заказ напитка
     * @param {Number} index    Индекс заказа
     * @param {Number} amount   Количество
     */
    printItem(index, amount) {
        return console.log(`${index + 1}. ${this._NAME}: ${this._type.name} x${amount}\n`);
    }
}

export default Drink;