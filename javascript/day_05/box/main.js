let colors = ['#3498db', '#9b59b6', '#e74c3c', '#2c3e50', '#d35400'];
let colorCopy = colors.slice();

// Truy cập
const btnAdd = document.getElementById("btn");
const totalBox = document.querySelector(".points");
const boxContainer = document.querySelector(".boxes");


// Hiển thị box
const renderBox = () => {
    // C1 : Cộng chuỗi
    let html = "";
    colors.forEach((color, index) => {
        html += `
            <div 
                class="box" 
                style="background-color: ${color};" 
                onclick="removeBox(${index})">
            </div>
        `;
    })
    boxContainer.innerHTML = html;

    // // C2 : Tạo thẻ
    // // Xóa hết nội dung trước khi render
    // boxContainer.innerHTML = "";

    // // Render box mới
    // colors.forEach((color, index) => {
    //     const boxEl = document.createElement("div");
    //     boxEl.classList.add("box");
    //     boxEl.style.backgroundColor = color;
    //     boxContainer.appendChild(boxEl);

    //     // Gắn sự kiện xóa
    //     boxEl.addEventListener("click", () => { removeBox(index) })
    // });

    // Cập nhật tổng số box
    totalBox.innerText = colors.length;
}

// Xóa box
const removeBox = (index) => {
    colors.splice(index, 1);
    renderBox();
}

// Thêm box
btnAdd.addEventListener("click", () => {
    colors = colors.concat(colorCopy);
    renderBox();
})

renderBox();
