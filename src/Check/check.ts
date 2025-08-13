//generic
//giup viet ma linh hoat, do tai su dung cao
function generic<T>(param: T): T {
    return param;
}
generic("1");
generic(1);
generic(true);

//1: Kieu mang
let numbers: number[] = [1,2,3,4,5];
let number: Array<number>= [1,2,3,4,5];
let studentName: Array<string>=["hoa","hong", "nhung"];

//2: Kieu Record(mo ta kieu du lieu cua key va value)
const user_info :Record<string,string | number> = {
    name: "nhung",
    age: 20
}
//3: Kieu partial(kieu tuy chon)
interface Contact{
    email: string,
    phone: string
}
const partialaUser: Partial<Contact>={
    email:"hoa@gmail.com",
}
//4:Kieu readonly chi hien thi va doc , khong capnhat gif
interface Score{
    Math: number;
    Physic: number
}    
const score1: Readonly<Score>={
    Math: 10,
    Physic: 5
}
interface User{
    id: string,
    name: string,
    email: string,
    address: string
}
let Use: Pick<User, "name" | "address" | "id">={
    name: "hoa",
    address: "ha noi",
    id: "11"
}
//Omit loai bo 1 so key ko can thiet
let Users2: Omit<User, "salary">= {
    id: "001",
    name: "hoa",
    email: "hoa@gmail.com0",
    address: "Hanoi"
}