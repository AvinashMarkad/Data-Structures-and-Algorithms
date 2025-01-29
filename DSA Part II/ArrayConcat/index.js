let array = [1, 2, 3, 4, 5,];
let array2 = [11, 12, 13, 14, 15, ];

// 1. Using concat() Method (Immutable)
let newArray = array.concat(array2);
console.log(newArray); // [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, ]

// 2. Using Spread Operator (...) (ES6)
let newarray2 = [...array, ...array2];
console.log(newarray2); // [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, ]
