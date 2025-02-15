const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var secElement = getSecondLargest =(arr) =>{
    let sortarr = arr.sort((a,b)=>a-b);
    
    let getSecond = sortarr[sortarr.length - 2];

    for(let i = 0; i < sortarr.length; i++){
        if(sortarr[i] === getSecond){
            getSecond = sortarr[i];
        }
    }
    
    // console.log(getSecond);
    return getSecond;
}

console.log(secElement(arr));


