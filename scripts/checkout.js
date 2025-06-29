import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { Car } from "../data/car.js";
//import '../data/cart-class.js';
// import '../data/backend-practice.js'


loadProducts(() => { // Anonymous function - function without name
    renderOrderSummary();
    renderPaymentSummary();
});

