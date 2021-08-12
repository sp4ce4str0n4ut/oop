import Order from "./Order.js";
import Drink from "./Drink.js";
import Hamburger from "./Hamburger.js";
import Salad from "./Salad.js";

const order = new Order();

const bigHamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);
order.addItem(bigHamburger, 2);

order.addItem(new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD));

const salad = new Salad(Salad.TYPE_OLIVIER, 150);
order.addItem(salad);

const drink = new Drink(Drink.TYPE_COFFEE);
order.addItem(drink);

order.removeItem(bigHamburger);

order.finish();