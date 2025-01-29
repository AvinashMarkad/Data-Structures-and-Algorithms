const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reduceFun = array.reduce((a, z) => {
    return a + z;
});

console.log(reduceFun); // 55

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];