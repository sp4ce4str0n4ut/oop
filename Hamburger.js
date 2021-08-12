import MenuItem from "./MenuItem.js";

/**
 * Класс, объекты которого описывают параметры гамбургера. 
 * 
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 */
class Hamburger extends MenuItem {
    constructor(size, stuffing) {
        super(Hamburger);
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
        if (arguments.length < 1) {
            throw new Error('Enter size value');
        }
        this._size = value;
    }

    /**
     * Изменить начинку гамбургера
     * @param value Начинка
     */
    setStuffing(value) {
        if (arguments.length < 1) {
            throw new Error('Enter stuffing value');
        }
        this._stuffing = value;
    }

    /**
     * Узнать цену гамбургера
     * @return {Number} Цена в тугриках
     */
    calculatePrice() {
        return this.getSize().price + this.getStuffing().price;
    }

    /**
     * Узнать калорийность гамбургера
     * @return {Number} Калорийность в калориях
     */
    calculateCalories() {
        return this.getSize().calories + this.getStuffing().calories;
    }
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = { name: 'small', price: 50, calories: 20 };
Hamburger.SIZE_BIG = { name: 'big', price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { name: 'cheese', price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { name: 'salad', price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { name: 'potato', price: 15, calories: 10 };

export default Hamburger;