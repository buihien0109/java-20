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
            resolve("Xong " + name);
            // reject("Vẩy rau, lỗi kỹ thuật");
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

const doTask = async () => {
    try {
        const task1 = await doTask1("Nhặt rau");
        console.log(task1);

        const task2 = await doTask2("Rửa rau");
        console.log(task2);

        const task3 = await doTask3("Luộc rau");
        console.log(task3);
    } catch (error) {
        console.log(error);
    }
}

doTask();