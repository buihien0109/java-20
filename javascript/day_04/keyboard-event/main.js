// // Lắng nghe sự kiện keydown
// document.addEventListener("keydown", function () {
//     console.log("keydown");
// });

// // Lắng nghe sự kiện keyup
// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });

// document.addEventListener("keydown", function (e) {
//     console.log(e);
// });

// document.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//         console.log("Bạn thật đẹp trai!");
//     } else {
//         console.log("Bấm phím Enter đi, có điều bất ngờ đó!")
//     }
// });

// add event to button element to show hide password and change label of button
const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", function () {
    if (input.type === "password") {
        input.type = "text";
        btn.textContent = "Hide";
    } else {
        input.type = "password";
        btn.textContent = "Show";
    }
});

