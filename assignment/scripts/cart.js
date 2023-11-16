console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
let maxItems = 5;

function addItem (item) {
    if (!isFull()) {
        console.log(`${item} added to basket.`);
        basket.push(item);
        return true;
    } else {
        console.log(`Basket is full. ${item} not added to basket!`);
        return false;
    }
}

console.log('Call item with "tomato":', addItem('Tomato'), basket);
addItem('Cucumber');
addItem('Vinegar');
addItem('Onions');


function listItems() {
    for (let x of basket) {
        console.log(x);
    }
}

listItems();

/*function empty() {
    basket = [];
}*/

function empty(array) {
    array.length = 0;
    }


empty(basket);
console.log('basket array after calling empty():', basket);

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

addItem('Cucumber');
addItem('Vinegar');
addItem('Onions');
addItem('Oranges');
addItem('Pears');
addItem('Kiwis');
console.log('Basket is currently full?:', isFull(), basket);

function removeItem (item) {
    if (basket.indexOf(item) !== -1) {
        basket.splice(basket.indexOf(item), 1);
        console.log(`${item} removed from basket.`);
        return item;
    } else {
        console.log(`${item} not found in basket.`);
        return null;
    }
}

removeItem('Vinegar');
console.log(basket);

removeItem('Lipstick');
console.log(basket);






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
