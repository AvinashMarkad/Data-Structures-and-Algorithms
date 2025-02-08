// var quickSort = (arr) => {
//     if (arr.length < 2) {
//         return arr;
//     }

//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else if(arr[i] > pivot) {
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [-6, -2, 8, 10, 2, 50, 40,50, 70, 60, 30];
// console.log(quickSort(arr))


// for the duplicate values, we can use the below code

var quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1]; // Choosing last element as pivot
    let left = [];
    let right = [];
    let equal = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]); // Handle duplicates properly
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
};

const arr = [60, 30,-6, -2, 8, 10, 2, 50, 40, 70, 50, ];
console.log(quickSort(arr));
