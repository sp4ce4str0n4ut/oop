import Product from "./Product.js";
/**
 * Класс, объекты которого описывают параметры заказа. 
 * 
 * @param _list         Массив позиций в заказе
 * @param _isComplete   Статус заказа
 */
class Order extends Product {
    constructor() {
        super();
        this._list = [];
        this._isComplete = false;
    }

    /**
     * Получить массив позиций в заказе
     */
    getList() {
        return this._list;
    }

    /**
     * Узнать статус заказа
     */
    isFinished() {
        return this._isComplete;
    }

    /**
     * Добавить позицию в заказ
     * @param {object} item      Позиция     
     * @param {number} amount    Количество
     */
    addItem(item, amount = 1) {

        if (this.isFinished()) {
            throw new Error('Cannot edit the order after its completion');
        } else if (arguments.length === 0) {
            throw new Error('Enter the item that should be added');
        }

        if (this._list.some(element => element.equals(item))) {
            this._list.find(element => element.equals(item))._amount += amount;
        } else {
            item._amount = amount;
            this._list.push(item);
        }
    }

    /**
     * Удалить позицию из заказа
     * @param {number} item      Позиция
     * @param {number} amount    Количество 
     */
    removeItem(item, amount = 1) {
        if (this.isFinished()) {
            throw new Error('Cannot edit the order after its completion');
        } else if (arguments.length === 0) {
            throw new Error('Enter the item that should be removed');
        }
        const index = this._list.findIndex(element => element.equals(item));
        this._list[index]._amount -= amount;
        if (this._list[index]._amount === 0) {
            this._list.splice(index, 1);
        } else if (this._list[index]._amount < 0) {
            throw new Error('Amount of items to be removed exceeds of that in the order');
        }
    }

    /**
     * Рассчитать полную стоимость заказа
     * @returns Цена в тугриках
     */
    calculatePrice() {
        if (this._list.length === 0) {
            throw new Error('Order list is empty');
        }
        let total = this._list.reduce((accumulator, item) => {
            return accumulator + item.calculatePrice() * item._amount;
        }, 0);

        return total;
    }

    /**
     * Рассчитать полную калорийность заказа
     * @returns Калорийность в калориях
     */
    calculateCalories() {
        if (this._list.length === 0) {
            throw new Error('Order list is empty');
        }
        let total = this._list.reduce((accumulator, item) => {
            return accumulator + item.calculateCalories() * item._amount;
        }, 0);

        return total;
    }

    /**
     * Закончить заказ
     */
    finish() {
        if (this._list.length === 0) {
            throw new Error('Order list is empty');
        }
        this._isComplete = true;

        console.log(`Order is accepted.\n\nYour order:\n`);
        this._list.forEach((item, index) => item.printItem(index, item.getItemAmount()));
        console.log(`Total price: ${this.calculatePrice()} ₮\nTotal calories: ${this.calculateCalories()} cal`);
    }
}

export default Order;
