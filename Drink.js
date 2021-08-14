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
}

export default Drink;