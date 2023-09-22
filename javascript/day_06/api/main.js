/*
Mô hình client - server

Client: trình duyệt
Server: máy chủ

Client -> Server: request (yêu cầu) - React
Server -> Client: response (phản hồi) - Java Spring Boot

Monolithic : Tất cả trong 1
Microservice: Nhiều service để xử lý nhiều chức năng khác nhau
- Service 1: xử lý chức năng đăng nhập
- Service 2: xử lý đơn hàng
- Service 3: xử lý sản phẩm

API: Application Programming Interface

CURD: Create - Update - Read - Delete
HTTP: POST - PUT - GET - DELETE

Order món ăn
POST : /orders : (body) {name: 'Cơm rang', price: 20000}
DELETE: /orders/com-rang
PUT: /orders/com-rang : (body) {name: 'Lẩu', price: 25000}
GET: /orders

Status code (mã trạng thái)
// 2xx: thành công
// 4xx: lỗi do client
// 5xx: lỗi do server
*/

// https://dog.ceo/api/breeds/image/random
// Fetch API -> return promise

const btn = document.getElementById("btn");
const image = document.getElementById("image");

// const getImage = () => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then(res => {
//             console.log(res);
//             return res.json(); // -> return promise
//         })
//         .then(data => {
//             console.log(data); // { message, status}
//             image.src = data.message;
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

const getImage = async () => {
    try {
        let res = await fetch("https://dog.ceo/api/breeds/image/random");
        console.log(res);

        let data = await res.json();
        console.log(data);

        image.src = data.message;
    } catch (error) {
        console.log(error);
    }
}

btn.addEventListener("click", getImage)
