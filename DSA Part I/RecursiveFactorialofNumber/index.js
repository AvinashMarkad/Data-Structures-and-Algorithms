function RecursiveFactorialofNumber(n) {
  if (n === 0) {
    return 1;
  }
  return n * RecursiveFactorialofNumber(n - 1);
}

console.log(RecursiveFactorialofNumber(0)); // 1
console.log(RecursiveFactorialofNumber(1)); // 1
console.log(RecursiveFactorialofNumber(2)); // 2
console.log(RecursiveFactorialofNumber(3)); // 6
console.log(RecursiveFactorialofNumber(4)); // 24
