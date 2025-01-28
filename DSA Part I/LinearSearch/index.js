function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i;
        }
    }
    return "Element Not Found";
}

console.log(LinearSearch([1, 2, 3, 4, 5], 3)); // 2
console.log(LinearSearch([1, 2, 3, 4, 5], 6)); // Element Not Found
// console.log(LinearSearch([1, 2, 3, 4, 5], 6)); // -1