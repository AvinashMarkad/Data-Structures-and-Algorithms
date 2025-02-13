let arr = [1, 2, 4, 5, 7, 8, 3];

var largestElement = (arr) => { 
    let largestElement = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largestElement) {
            largestElement = arr[i];
        }
    }
    return largestElement;
}

console.log(largestElement(arr)); // 8