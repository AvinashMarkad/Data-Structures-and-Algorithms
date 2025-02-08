var insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
      arr[j + 1] = currentVal;
    
    }
    return arr;
    
};

const arr = [2, 1, 9, 76, 4];
console.log(insertionSort(arr));
