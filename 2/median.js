function median(num){

    let arr = [Math.ceil((num.length-1)/2),Math.floor((num.length-1)/2)];
    let center_pos = num[arr[0]] + num[arr[1]];
    let mean = center_pos / arr.length;
    
    return mean;
}


console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10]));
console.log(median([2, 2, 6, 8, 8, 10, 10]));
console.log(median([1, 2, 2, 4, 7, 8, 9, 10])
);
