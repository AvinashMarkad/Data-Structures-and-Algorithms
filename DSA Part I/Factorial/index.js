function factorial(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(5)); // 120

// function Factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * Factorial(n - 1);
// }
// console.log(Factorial(0)); // 120
