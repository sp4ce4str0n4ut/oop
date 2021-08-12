/**
 * Класс, объекты которого описывают параметры заказа. 
 * 
 * @param _list         Массив позиций в заказе
 * @param _isComplete   Статус заказа
 */
class Order {
    constructor() {
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
        } else if (arguments.length < 1) {
            throw new Error('Enter the item that should be added');
        }
        if (this.getList().includes(item)) {
            item._amount += amount;
        } else {
            item._amount = amount;
            this.getList().push(item);
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
        } else if (arguments.length < 1) {
            throw new Error('Enter the item that should be removed');
        }
        const index = this.getList().findIndex(element => element === item);
        this.getList()[index]._amount -= amount;
        if (this.getList()[index]._amount <= 0) {
            this.getList().splice(index, 1);
        }
    }

    /**
     * Рассчитать полную стоимость заказа
     * @returns Цена в тугриках
     */
    calculatePrice() {
        if (this.getList().length < 1) {
            throw new Error('Order list is empty');
        }
        let total = 0;
        this.getList().map(element => total += element.calculatePrice() * element._amount);

        return total;
    }

    /**
     * Рассчитать полную калорийность заказа
     * @returns Калорийность в калориях
     */
    calculateCalories() {
        if (this.getList().length < 1) {
            throw new Error('Order list is empty');
        }
        let total = 0;
        this.getList().map(element => total += element.calculateCalories() * element._amount);

        return total;
    }

    /**
     * Закончить заказ
     */
    finish() {
        if (this.getList().length < 1) {
            throw new Error('Order list is empty');
        }
        this._isComplete = true;
        console.log(`Order is accepted.\n\nYour order:\n`);
        this.getList().forEach((item, index) => {
            if (item.getMenuItem() === 'Hamburger') {
                console.log(`${index + 1}. ${item.getMenuItem()}: ${item.getSize().name}, with ${item.getStuffing().name} x${item._amount}\n`);
            } else if (item.getMenuItem() === 'Salad') {
                console.log(`${index + 1}. ${item.getMenuItem()}: ${item._type.name}, ${item.getWeight()}g x${item._amount}\n`);
            } else {
                console.log(`${index + 1}. ${item.getMenuItem()}: ${item._type.name} x${item._amount}\n`);
            }
        });
        console.log(`Total price: ${this.calculatePrice()} ${String.fromCharCode('0x20AE')}`);
        console.log(`Total calories: ${this.calculateCalories()} cal`);
    }
}

export default Order;