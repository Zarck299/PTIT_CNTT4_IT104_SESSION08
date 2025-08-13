"use strict";
function findElement(arr, val) {
    return arr.find(item => item === val);
}
const allNumber = [1, 2, 3, 4, 5];
console.log(findElement(allNumber, 3));
console.log(findElement(allNumber, 10));
const allWord = ["apple", "banana", "chocolate", "strawberry"];
console.log(findElement(allWord, "apple"));
console.log(findElement(allWord, "fish"));
