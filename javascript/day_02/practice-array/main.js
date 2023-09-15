// Bài 1: Viết function tìm số lớn nhất trong mảng
const findMax = arr => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// Bài 2: Viết function tìm số nhỏ nhất trong mảng
const findMin = arr => {

}

// Bài 3: Viết function cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
const getModulo2 = arr => {
    let rs = [];
    for (let i = 0; i < arr.length; i++) {
        rs.push(arr[i] % 2);
    }
    return rs;
}

// Bài 4: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần (Sử dụng array để làm)
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘aaaaaaaaaa’
const repeatString = str => {
    let rs = [];
    for (let i = 0; i < 10; i++) {
        rs.push(str);
    }
    return rs.join("");
}

// Bài 5: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
const repeatString1 = str => {
    let rs = [];
    for (let i = 0; i < 10; i++) {
        rs.push(str);
    }
    return rs.join("-");
}

// Bài 6: Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.
// Ví dụ
// “Race car” => true, => racecar chuoi dao nguoc la: racecar
// “hello world” => false.
const isSymmetricString = str => {
    let str1 = str.toLowerCase().split(" ").join("") // helloworld
    let reverseString = str1.split("").reverse().join("")
    return str1 == reverseString
}
console.log(isSymmetricString("Race car"));
console.log(isSymmetricString("hello world"));

// Bài 7: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).
// Ví dụ Array + sort
// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359
const findMinNumber = number => {
    let arr = number.toString().split("").sort();
    console.log(arr);
    if(arr[0] == '0') {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] != '0') {
                arr[0] = arr[i];
                arr[i] = '0';
                break;
            }
            
        }
    }
    console.log(arr);
    return Number(arr.join(""));
}
console.log(findMinNumber(203950));