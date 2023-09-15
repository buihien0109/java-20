// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn (background = “yellow”)
const p = document.querySelector("p");
const words = p.innerText.split(" ");
console.log(words);
let newWords = [];
for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
        newWords.push(`<span style="background: yellow">${words[i]}</span>`);
    } else {
        newWords.push(words[i]);
    }
}
p.innerHTML = newWords.join(" ");


// 2. Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
// const a = document.createElement("a");
// a.innerText = "facebook";
// a.href = "https://facebook.com";
// p.insertAdjacentElement("afterend", a);

p.insertAdjacentHTML("afterend", `<a href="https://facebook.com">facebook</a>`);

// 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const removeSpecialCharactersInArray = (arr) => {
    const specialCharacters = [",", ".", "(", ")", "?", "!"];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!specialCharacters.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const div = document.createElement("div");
div.innerText = `Số từ: ${removeSpecialCharactersInArray(words).length}`; // Loại bỏ các ký hiệu đặc biệt trong mảng words (, . ( ) ? !)))
p.insertAdjacentElement("afterend", div);

// 4. Thay thế ký hiệu (, - dấu phẩy) => 🤔 và (. - dấu chấm) => 😲
p.innerHTML = p.innerHTML.replaceAll(",", "🤔").replaceAll(".", "😲"); // chaing method