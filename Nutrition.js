/**
 * Класс, объекты которого описывают компоненты блюда (либо само блюдо, если оно не рабито на компоненты). 
 * @param _name     Название
 * @param _price    Цена
 * @param _calories Калории
 */
class Nutrition {
    constructor(product = {}) {
        this._name = product.name;
        this._price = product.price;
        this._calories = product.calories;
    }

    /** Получить название компоненты */
    get name() {
        return this._name;
    }

    /** Получить цену компоненты */
    get price() {
        return this._price;
    }

    /** Получить калории компоненты */
    get calories() {
        return this._calories;
    }

}

export default Nutrition;