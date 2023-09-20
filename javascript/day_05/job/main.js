// 1. Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.
const jobCard = document.querySelector(".job-card");
const jobContainer = document.querySelector(".jobs");

const jobCard1 = jobCard.cloneNode(true);
const jobCard2 = jobCard.cloneNode(true);
const jobCard3 = jobCard.cloneNode(true);

jobContainer.appendChild(jobCard1);
jobContainer.appendChild(jobCard2);
jobContainer.appendChild(jobCard3);

// 2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
jobCard1.querySelector("h3").innerText = "JavaScript Developer";
jobCard2.querySelector("h3").innerText = "Java Developer";
jobCard3.querySelector("h3").innerText = "Python Developer";

// 3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const jobCards = document.querySelectorAll(".job-card");
const jobListed = document.querySelector("#jobs-listed span");
jobListed.innerText = jobCards.length;

// 4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
const searchInput = document.querySelector("#search");
searchInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        const searchValue = searchInput.value;
        console.log(searchValue);

        jobCards.forEach(jobCard => {
            const jobTitle = jobCard.querySelector("h3").innerText; // lấy ra tên công việc
            if(jobTitle.toLowerCase().includes(searchValue.toLowerCase())) {
                jobCard.style.display = "block";
            } else {
                jobCard.style.display = "none";
            }
        });
    }
});

// 5. Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc
const showAllBtn = document.querySelector("#show-all");
showAllBtn.addEventListener("click", () => {
    searchInput.value = "";
    jobCards.forEach(jobCard => {
        jobCard.style.display = "block";
    });
});