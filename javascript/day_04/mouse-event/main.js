// document.addEventListener("click", function () {
//     console.log("click");
// });

// document.addEventListener("mousedown", function () {
//     console.log("mousedown");
// });

// document.addEventListener("mousemove", function () {
//     console.log("mousemove");
// });

// document.addEventListener("mouseup", function () {
//     console.log("mouseup");
// });

document.addEventListener("click", function (event) {
    // kiểm tra xem đã tồn tại hình tròn trước đó hay không?
    let currentEl = document.querySelector(".circle");
    if (currentEl) {
        // nếu có thì xóa đi
        document.body.removeChild(currentEl);
    }

    // tạo ra thẻ div
    let circleEl = document.createElement("div");

    // thêm class cho thẻ div
    circleEl.classList.add("circle");

    // gán vị trí cho thẻ div
    circleEl.style.left = `${event.offsetX - 50}px`;
    circleEl.style.top = `${event.offsetY - 50}px`;

    // thêm vào body
    document.body.appendChild(circleEl);
});
