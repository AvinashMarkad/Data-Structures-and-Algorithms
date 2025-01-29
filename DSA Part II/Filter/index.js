let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr2 = arr1.filter((value) => {
    return value % 2 === 0 && value < 7 && value > 0;
});

console.log(arr2); // [1, 2, 3, 4]