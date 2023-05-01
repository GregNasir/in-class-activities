//WRITE YOUR CODE BELOW
const customerDrink = {

    drinkName: "Latte",
    sugar: 3,
    ready: true,
    nowItsReady: function() {
        this.isReady = true;
    }

}

console.log(customerDrink.drinkName);
console.log(customerDrink.sugar);

if (customerDrink.isready == true) {
    console.log("Ready for pick up");
} else {
    console.log("Still in order queue");
}

customerDrink.nowItsReady();

if (customerDrink.isReady == true) {
    console.log("Ready for pick up");
} else {
    console.log("Still in order queue");
}

