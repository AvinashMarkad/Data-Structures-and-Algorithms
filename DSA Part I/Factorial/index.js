// Write a function that calculates the factorial of a non negative interger.

function Factorial(n) {
  let result = 1;
  for (let i =2; i<=n; i++){
    // result = result * i;
    result *= i;
  }
  return result;
}
console.log(Factorial(0)); // 1
console.log(Factorial(1)); // 1
console.log(Factorial(5)); // 120

// function Factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * Factorial(n - 1);
// }
// console.log(Factorial(0)); // 120
