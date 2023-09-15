console.log("Hello world");
// alert("Hello world");

// Khai báo biến và không gán giá trị cho biến
let age;
console.log(age);
age = 35;
console.log(age);

// Khai báo biến và gán giá trị cho biến
let email = "hien@techmaster.vn"
let isStatus = true;

const PI = 3.14;
// PI = 4;

// Java : int, short, byte, long, double, float, char, boolean
// Javascript : number, string, boolean, null, undefined, symbol
console.log(typeof age);
console.log(typeof email);
console.log(typeof isStatus);

// Toán tử
console.log(1 + '1'); // '11'
console.log(3 * '3'); // 9
console.log('9' / '3'); // 3
console.log('4' * 4); // 16
console.log(10 / email); // NaN - Not a Number
console.log(10 / 0); // Infi

// ES6 - Template String
let name = "Bùi Hiên"
let year = 1997

console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay ${2023 - year} tuổi`);
console.log("Xin chào các bạn, mình tên là " + name + ". Năm nay " + (2023 - year) + " tuổi");

// Function
// C1 : Regular Function
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));

// C2 : Function Expression
const sum1 = function (a, b) {
    return a + b;
}
console.log(sum1(10, 20));

// C3 : Arrow Function (ES6) || Default Parameter (ES6)
const sum2 = (a = 10, b = 20) => {
    let firstName = "John";
    console.log(firstName);
    // console.log(a);
    // console.log(b);
    // console.log("--");
    return a + b;
}
// const sum2 = (a, b) => a + b;
console.log(sum2(20, 20));
console.log(sum2(20));
console.log(sum2());

// Block
{
    let number = 100;
    console.log(number);
}
// console.log(number);

// let a = prompt("Nhập vào a");
// let b = prompt("Nhập vào b");
// alert(sum2(Number(a), Number(b)));

console.log(sum2(10, 20));