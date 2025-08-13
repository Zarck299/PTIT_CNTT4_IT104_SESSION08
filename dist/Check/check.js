"use strict";
//generic
//giup viet ma linh hoat, do tai su dung cao
function generic(param) {
    return param;
}
generic("1");
generic(1);
generic(true);
//1: Kieu mang
let numbers = [1, 2, 3, 4, 5];
let number = [1, 2, 3, 4, 5];
let studentName = ["hoa", "hong", "nhung"];
//2: Kieu Record(mo ta kieu du lieu cua key va value)
const user_info = {
    name: "nhung",
    age: 20
};
const partialaUser = {
    email: "hoa@gmail.com",
};
const score1 = {
    Math: 10,
    Physic: 5
};
let Use = {
    name: "hoa",
    address: "ha noi",
    id: "11"
};
//Omit loai bo 1 so key ko can thiet
let Users2 = {
    id: "001",
    name: "hoa",
    email: "hoa@gmail.com0",
    address: "Hanoi"
};
