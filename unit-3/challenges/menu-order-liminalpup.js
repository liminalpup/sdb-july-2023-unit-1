let menu = {
  burger: 5.00,
  fries: 3.50,
  shake: 1.11,
  salad: 4.25,

  order(orderPlaced) {
    let orderSplit = orderPlaced.split(", "); //using .split() converts "orderPlaced" into an array called "orderSplit"
    let sum = 0
    orderSplit.forEach(i => {
      !this[i] ? console.log(`${i} is not on the menu`) : sum += this[i];
    })
  }
}

menu.order("burger");
