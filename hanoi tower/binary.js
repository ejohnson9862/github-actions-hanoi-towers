function binarySearch(array, num) {
    let start = 0;
    let end = array.length - 1;
    let steps = 0;

while (start <= end){
    steps++;
    let mid = Math.floor((start + end)/2);

    if (num === array[mid]){
        return {index: mid, steps};
    }
    else if (num > array[mid]){
        start = mid + 1;
    }
    else {
        end = mid - 1;
    }
}
return {index: -1, steps};
}

//  if (typeof module !== "undefined") {
//     module.exports = { binarySearch };
//     }
       

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const num = 2;

binarySearch(myArray, num)
console.log(binarySearch(myArray, num));

