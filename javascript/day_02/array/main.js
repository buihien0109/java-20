// Khai báo array rỗng
let arr = [];

// Khai báo array
let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
number[0] = 1;
number[1] = "Bùi Hiên";
number[2] = true;

// Khai báo và khởi tạo giá trị cho array
let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];

console.log(arr);
console.log(number);
console.log(myArr);

console.log(myArr[3]);
myArr[3] = 40;
console.log(myArr);

// Method : Thêm, xóa phần tử
// pop(), push(), shift(), unshift(), splice()
myArr.pop();
console.log(myArr);

myArr.push("Trần Văn B");
console.log(myArr);

// splice(begin, delete_count, ...elements)
myArr.splice(2, 2);
console.log(myArr);

myArr.splice(3, 0, 200, 300);
console.log(myArr);

// includes() : Kiểm tra 1 phần tử có trong array hay không?
console.log(myArr.includes(200));
console.log(myArr.includes(400));

// sort
let numbers = [3, 2, 6, 7, 1, 10, 15, 22];
console.log(numbers.sort((a, b) => a - b));
console.log(myArr.sort());
console.log(myArr.sort((a, b) => a - b));

// split - join
let text = "Xin chào các bạn";
let words = text.split(" ");
console.log(words);

console.log(words.join("-"));


// 1. Duyệt qua mảng số và in ra giá trị của mảng
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// In ra các phần tử của mảng (v = numbers[i])
numbers.forEach((v, i) => {
    console.log(v);
})