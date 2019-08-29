const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function(meal) { 
     this.orders.push(meal) 
      },
    placeAllOrders: function(meal) {
     return this.orders
    }
    }
 const meals = [
Veggiemeal = {
  sandwichType: "veggie",
  fries: true,
  drink: "Coca-Cola"
},
Chickenmeal = {
    sandwichType: "chicken",
    fries: false,
    drink: "Sprite"
},
 Steakmeal = {
    sandwichType: "steak",
    fries: true,
    drink: "Dr. Pepper"
}
] 
restaurant.placeOrder();
restaurant.placeAllOrders();
console.table(meals)