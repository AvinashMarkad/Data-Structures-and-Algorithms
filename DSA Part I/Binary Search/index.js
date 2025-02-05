// Binary Search for that serch the  sorted array is requird
let arr = [1, 2, 3, 4, 15, 5, 6, 7, 8, 9];
console.log(arr);

let sortedArray = arr.sort((a, b) => a - b);
console.log(sortedArray); 

var binarySearch = (sortedArray, target) => { 
    let lp = 0;
    let rp = sortedArray.length - 1;

    while (lp <= rp) {
        let mid = Math.floor((lp + rp) / 2);

        if (sortedArray[mid] === target) {
            return mid;
        }

        if (sortedArray[mid] > target) {
            rp=mid-1;
        } else {
            lp=mid+1;
        }
    }
    return "Element Not Found";
};



console.log(binarySearch(sortedArray, 0)); 