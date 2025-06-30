import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { Car } from "../data/car.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
// import '../data/backend-practice.js'

// Promises - Allows js to do multiple things at the same time
// A better way to handle asynchronous code
// Similar to done() function
// Promise Let us wait fore some code to finish, before going to the next step

async function loadPage() {  // async-await : shortcut for promises
    // async - makes a function return a promise
    // await - lets us wait for a promise to finish, before going to the next line

    // Error handling: try/catch we don't use everywhere, it's meant to handle unexpected errors
    // (Which means code is correct but, error occurred outside our control)
    try { // we can use try / catch with synchronous code (or normal code)

        //throw 'error1'; // throw creates error mannually
        await loadProductsFetch();

        const value = await new Promise((resolve, reject) => {
            // throw 'error2';
            loadCart(() => {
                //reject('error3'); // reject - lets us create an error in the future
                resolve();
            });
        });

    } catch(error) {
        console.log('Unexpected error. Please try again later.')
    }
    
    renderOrderSummary();
    renderPaymentSummary();

    return 'value2' // resolve('value2')
}
loadPage();

/*

Promise.all([
     // promise is a built in class - runs inner function immediately, Don’t go to the next step until I call resolve()
     // this ensure products are loaded first from backend, waiting to finsish loading
     // resolve is a function lets us control when to go to next step

    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});

*/

/*
new Promise((resolve) => { // it is a built in class - runs inner function immediately, Don’t go to the next step until I call resolve()
    loadProducts(() => { // this ensure products are loaded first from backend, waiting to finsish loading
        resolve('value1'); // resolve is a function lets us control when to go to next step
    });

}).then((value) => { // The second step starts only after the first one finishes
    console.log(value);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => { // Final rendering step happens only after both loading steps finishes
    renderOrderSummary();
    renderPaymentSummary();
});

*/
/*
// It is a callback 
// Why we aren't using this callback instead of above promise?
// Cause: Multiple callbacks cause a lot of nesting (fun inside fun)
loadProducts(() => { // Anonymous function - function without name
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});

*/
