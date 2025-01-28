function recFib(n) {
  if (n < 2) {
    return n;
  }
  return recFib(n - 1) + recFib(n - 2);
}

console.log(recFib(0)); // 0
console.log(recFib(1)); // 1
console.log(recFib(2)); // 1
console.log(recFib(3)); // 2
console.log(recFib(6)); // 8
console.log(recFib(13)); // 233