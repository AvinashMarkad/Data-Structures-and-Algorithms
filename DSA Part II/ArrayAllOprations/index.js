// Creating an array:
let fruits = ['Apple', 'Banana', 'Mango'];

// Accessing elements:
let firstFruit1 = fruits[0]; // 'Apple'

// Adding elements:
fruits.push('Orange'); // Adds 'Orange' to the end
fruits.unshift('Strawberry'); // Adds 'Strawberry' to the beginning

// Removing elements:
let lastFruit = fruits.pop(); // Removes 'Orange' from the end
let firstFruit = fruits.shift(); // Removes 'Strawberry' from the beginning

// Finding elements:
let index = fruits.indexOf('Banana'); // 1

// Removing specific elements:
let removedFruit = fruits.splice(index, 1); // Removes 'Banana'

// Iterating over elements:
fruits.forEach(function(item, index) {
  console.log(index, item);
});

// Mapping elements to a new array:
let upperCaseFruits = fruits.map(function(item) {
  return item.toUpperCase();
});

// Filtering elements:
let longNamedFruits = fruits.filter(function(item) {
  return item.length > 5;
});

// Reducing an array:
let totalLength = fruits.reduce(function(sum, item) {
  return sum + item.length;
}, 0);

// Checking existence of elements:
let hasApple = fruits.includes('Apple'); // true or false

// Joining elements into a string:
let fruitString = fruits.join