function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2};
}
const person = { name: "John", age: 30 };
const job = { title: "Developer", salary: 5000 };

const merged = mergeObjects(person, job);

console.log(merged);