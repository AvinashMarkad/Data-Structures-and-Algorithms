function fibonacci(n) {
  const num = [0, 1];
  for (let i = 2; i <= n; i++) {
    num.push(num[i - 1] + num[i - 2]);
  }
  return num;
}

// Example usage:
console.log(fibonacci(5)); // should print 5
