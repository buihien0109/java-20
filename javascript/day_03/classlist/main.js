const h1 = document.querySelector("h1");

console.log(h1.classList);

// add
h1.classList.add("text-big", "text-bold");

// remove
h1.classList.remove("text-big");

// contains
console.log(h1.classList.contains("text-red"));
console.log(h1.classList.contains("text-big"));

// toggle
// setInterval(() => {
//     h1.classList.toggle("text-red");
// }, 1000); // 1000ms = 1s

// ví dụ : 10s -> 0s. Kết thúc đếm ngược hiển thị "Chúc mừng năm mới"

let count = 10;
let interval = setInterval(() => {
    count--;
    h1.innerText = `${count}s`;

    if (count === 0) {
        h1.innerText = "Chúc mừng năm mới";
        clearInterval(interval);
    }
}, 1000);



