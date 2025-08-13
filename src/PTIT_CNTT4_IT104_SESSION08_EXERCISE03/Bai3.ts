function reverseArray<T>(arr: T[]) {
    return arr.slice().reverse();
}
console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArray(["banana", ""]));