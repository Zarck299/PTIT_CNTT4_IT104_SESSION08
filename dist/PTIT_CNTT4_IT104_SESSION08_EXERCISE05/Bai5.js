"use strict";
function findFirstDivisibleByTwo(arr) {
    return arr.find(item => item % 2 == 0);
}
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findFirstDivisibleByTwo(Numbers));
