function doTask1(name, callback) {
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 5000);
}

function doTask2(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 3000);
}

function doTask3(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 4000);
}

function finish1() {
    console.log("Kết thúc công việc");
}

function finish(name) {
    console.log("Kết thúc công việc : " + name);
}

// Nhặt rau - Rửa rau - Luộc rau
doTask1("Nhặt rau", () => {
    doTask2("Rửa rau", () => {
        doTask3("Luộc rau", finish1)
    })
})

// Ăn sáng - Xem tin tức - Kiểm tra email
// doTask1("Ăn sáng", () => {
//     finish("Ăn sáng")
// })
// doTask2("Xem tin tức", () => {
//     finish("Xem tin tức")
// })
// doTask3("Kiểm tra email", () => {
//     finish("Kiểm tra email")
// })