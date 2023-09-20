// Giá trị mặc định của counter ban đầu = 0

// Bấm vào Cộng tăng counter lên 1

// Bấm vào Trừ giảm counter đi 1

// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red

let counter = 0;
const btnIncrease = document.querySelector(".increase");
const btnDecrease = document.querySelector(".decrease");
const counterElement = document.querySelector(".counter");

btnIncrease.addEventListener("click", function () {
    