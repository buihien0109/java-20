// 6. Thêm 1 nút “add” + 1 ô input để nhập text. Mỗi khi bấm nút thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách
const inputEl = document.querySelector("input");
const btnAdd = document.querySelector("#btn-add");
const listEl = document.querySelector("#list");

btnAdd.addEventListener("click", () => {
    // Lấy ra nd trong ô input
    const inputText = inputEl.value;

    // Kiểm tra xem nd có rỗng hay không
    if (inputText.trim() === "") {
        alert("Vui lòng nhập nội dung");
        return;
    }

    // Tạo ra 1 thẻ li
    const liEl = document.createElement("li");
    liEl.innerHTML = inputText;
    listEl.appendChild(liEl);

    inputEl.value = "";
    inputEl.focus();
})

// 7. Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách
const btnRemove = document.querySelector("#btn-remove");
btnRemove.addEventListener("click", () => {
    // Lấy ra thẻ li cuối cùng
    const liLast = document.querySelector("#list li:last-child");
    console.log(liLast);

    // Kiểm tra xem liLast có tồn tại hay không
    if (!liLast) {
        return;
    }

    // Xóa thẻ li cuối cùng
    listEl.removeChild(liLast);
})

// 8. Thêm 1 nút “Hide” trên đầu của danh sách <ul>.
// Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”
// Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”
const btnToggle = document.querySelector("#btn-toggle");
btnToggle.addEventListener("click", () => {
    listEl.classList.toggle("hide");

    if (listEl.classList.contains("hide")) {
        btnToggle.innerHTML = "Show";
    } else {
        btnToggle.innerHTML = "Hide";
    }
})