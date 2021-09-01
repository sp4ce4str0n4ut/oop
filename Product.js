/**
 * Класс, объекты которого описывают продукт. 
 */
class Product {

    /**
     * Узнать наименование продукта
     * @returns Наименование
     */
    getItemName() {
        return this._NAME;
    }

    /**
     * Узнать цену продукта
     * @returns {number} Цена в тугриках
     */
    calculatePrice() {
        return this._type.price;
    }

    /**
     * Узнать калорийность продукта
     * @returns {number} Калорийность в калориях
     */
    calculateCalories() {
        return this._type.calories;
    }

    /**
     * Узнать количество продукта
     * @returns Количество продукта
     */
    getItemAmount() {
        if (this.hasOwnProperty('_amount')) {
            return this._amount;
        } else {
            return new Error('"_amount" value is missing');
        }
    }
}

export default Product;