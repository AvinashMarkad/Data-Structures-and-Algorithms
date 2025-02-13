let x = 8;

var binarySearch = (x) => {
    let left = 0;
    let right = x;
    let ans = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let squar = mid * mid;

        if (squar === x) {
            return mid;

        }

        if (squar > x) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
            ans = mid;
        }
    }
    return ans;
}

console.log(binarySearch(x)); // 2


// this is the concept of shallow copy 

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = arr1;
// arr2[0] = 100;

// console.log(arr1); // [100, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr2);//[100, 2, 3, 4, 5, 6, 7, 8, 9, 10]