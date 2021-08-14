import Product from "./Product.js";
import Nutrition from "./Nutrition.js";

/**
 * Класс, объекты которого описывают параметры гамбургера. 
 * 
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 */
class Hamburger extends Product {
    /* Наименование позиции */
    _NAME = 'Hamburger';

    /* Размеры, виды начинок и добавок */
    static SIZE_SMALL = new Nutrition({ name: 'small', price: 50, calories: 20 });
    static SIZE_BIG = new Nutrition({ name: 'big', price: 100, calories: 40 });
    static STUFFING_CHEESE = new Nutrition({ name: 'cheese', price: 10, calories: 20 });
    static STUFFING_SALAD = new Nutrition({ name: 'salad', price: 20, calories: 5 });
    static STUFFING_POTATO = new Nutrition({ name: 'potato', price: 15, calories: 10 });

    constructor(size, stuffing) {
        super();
        this._size = size;
        this._stuffing = stuffing;
    }

    /**
     * Узнать размер гамбургера
     */
    getSize() {
        return this._size;
    }

    /**
     * Узнать начинку гамбургера
     */
    getStuffing() {
        return this._stuffing;
    }

    /**
     * Изменить размер гамбургера
     * @param value Размер
     */
    setSize(value) {
        if (arguments.length === 0) {
            throw new Error('Enter size value');
        }
        this._size = value;
    }

    /**
     * Изменить начинку гамбургера
     * @param value Начинка
     */
    setStuffing(value) {
        if (arguments.length === 0) {
            throw new Error('Enter stuffing value');
        }
        this._stuffing = value;
    }

    /**
     * Узнать цену гамбургера
     * @return {Number} Цена в тугриках
     */
    calculatePrice() {
        return this._size.price + this._stuffing.price;
    }

    /**
     * Узнать калорийность гамбургера
     * @return {Number} Калорийность в калориях
     */
    calculateCalories() {
        return this._size.calories + this._stuffing.calories;
    }
}

export default Hamburger;