console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
  basket.push(item);
  return true;
}

addItem("pizza");
console.log(addItem("steak"));
console.log(basket);

function listItems(thisBasket) {
  for (food of thisBasket) {
    console.log(food);
  }
}

listItems(basket);

function empty() {
  basket = [];
}

empty();
console.log(basket);
