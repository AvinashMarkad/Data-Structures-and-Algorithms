function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const array = [1, 2, 3, 4, 5];
const target = 3;
console.log(linearSearch(array, target));
