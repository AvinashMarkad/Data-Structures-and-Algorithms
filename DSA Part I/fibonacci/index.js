function fibonacci(n) {
  const fib = [0, 1];
  for (i = 2; i < n; i++){
    fib [i] =fib[i-1]+fib[i-2];
  }
  return fib;
}
console.log(fibonacci(3)); // should print 5
//.......................................................

// function fibonacci(n) {
//   const num = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     num.push(num[i - 1] + num[i - 2]);
//   }
//   return num;
// }

// // Example usage:
// console.log(fibonacci(5)); // should print 5
