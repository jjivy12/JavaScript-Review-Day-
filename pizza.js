//Exercise - Pizza
//. Create an array of pizza toppings
//. Write a function that we can call
// Function should return a string that describes the pizza, example “A delicious
//pizza with Cheese and Pepperoni and Garlic and Peppers.”

var pizzaToppings = ['cheese', 'pepperoni', 'sausauge','onions', 'peppers' ];
   function myFunction() {
    var myPizza = pizzaToppings.join(' and ')
        return "A delicious pizza with " + myPizza;
    }
console.log(myFunction());
