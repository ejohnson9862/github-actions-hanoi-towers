function binarySearch (array, num){
    let steps = 0;
    let start = 0;
    let end = array.length - 1;

while (start<= end){
    steps++;
    let mid = Math.floor((start + end)/2);

    if (array[mid] === num){
        return{index: num, steps};
    }
    else if (num >= array[mid]){
        start = array[mid] + 1;
    }
    else{
        end = array[mid] - 1;
    }
}
return {index: num, steps};
}
let num = 3;
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(binarySearch(myArray, num));
