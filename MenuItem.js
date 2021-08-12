/**
 * Класс, объекты которого описывают позицию меню. 
 * 
 * @constructor
 * @param menuItem       Позиция меню
 */
class MenuItem {
    constructor(menuItem) {
        this._menuItem = menuItem;
    }

    /**
     * Узнать позицию меню
     */
    getMenuItem() {
        return this._menuItem.name;
    }
}

export default MenuItem;