let arr1 = [11, 21, 31, 41, 51];

let arr2 = arr1.map((value, index, array) => {
    console.log(value,index, array);
    return value + index;
})

console.log(arr2);