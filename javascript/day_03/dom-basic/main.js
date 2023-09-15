const heading = document.getElementById("heading");
console.log(heading);

const h1 = document.querySelector("#heading");
console.log(h1);

const p1 = document.querySelector("p");
console.log(p1);

const p2 = document.querySelector(".para");
console.log(p2);

const p3 = document.querySelector("p:nth-child(4)");
console.log(p3);

const paraList = document.querySelectorAll("p");
console.log(paraList);

// style
heading.style.backgroundColor = "black";
heading.style.color = "red";

paraList.forEach((p) => {
    p.style.color = "blue";
    p.style.fontSize = "24px";
});

// lấy ra nội dung
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

const ul1 = document.querySelector(".box ul");
console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);

// set lại nội dung
heading.innerHTML = "Xin chào";
heading.innerHTML = "<i>Xin chào</i>";

p1.innerText = "<i>Xin chào 1</i>";
p2.textContent = "<i>Xin chào 2</i>";

// xóa
document.body.removeChild(p1);

const li22 = document.querySelector(".box ul .li");
ul1.removeChild(li22);

// thay thế
const btn = document.createElement("button");
btn.innerText = "Click me";
console.log(btn);

document.body.replaceChild(btn, p2);

// sao chép
const box = document.querySelector(".box");
const boxCopy = box.cloneNode(true);

console.log(box);
console.log(boxCopy);

// document.body.prepend(boxCopy);
// document.body.appendChild(boxCopy);
document.body.insertBefore(boxCopy, p3);

// Ví dụ thực hành :
// 1. Chuyển toàn bộ thẻ li trong ul2 sang màu đỏ
const liList = document.querySelectorAll("body > ul li");
liList.forEach((e) => {
    e.style.color = "red";
});

// 2. Xóa thẻ li3 trong ul2
const ul2 = document.querySelector("body > ul");
const li3 = ul2.querySelector(".li + li");
ul2.removeChild(li3);

// 3. Thay thế p3 thành thẻ a link đến trang google.com
const link = document.createElement("a");
link.href = "https://www.google.com/"
link.innerText = "Trang google";
document.body.replaceChild(link, p3);

// 4. Thêm 1 ảnh bất kỳ ở đằng sau p3 (sau thẻ a ở câu 3)
const image = document.createElement("img");
image.src = "https://media.techmaster.vn/api/static/c68uqgnk0cmj7hbgjc9g/RW7_mdeg";
image.width = 500
document.body.insertBefore(image, box);