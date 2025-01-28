function recursivFact(n) {
  if (n === 0) {
    return 1;
  }

  return n* recursivFact(n-1);
}

console.log(recursivFact(0)); // 1
console.log(recursivFact(1)); // 1
console.log(recursivFact(2)); // 2
console.log(recursivFact(3)); // 6
console.log(recursivFact(4)); // 24
