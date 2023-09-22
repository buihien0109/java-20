const doTask1 = (name) => {
    return new Promise((resolve, reject) => {
        console.log("Bắt đầu công việc");
        console.log("Thực hiện công việc " + name);
        setTimeout(() => {
            resolve("Xong " + name);
        }, 5000);
    })
}

const doTask2 = (name) => {
    return new Promise((resolve, reject) => {
        console.log("Thực hiện công việc " + name);
        setTimeout(() => {
            // resolve("Xong " + name);
            reject("Vẩy rau, lỗi kỹ thuật");
        }, 3000);
    })
}

const doTask3 = (name) => {
    return new Promise((resolve, reject) => {
        console.log("Thực hiện công việc " + name);
        setTimeout(() => {
            resolve("Xong " + name);
        }, 4000);
    })
}

