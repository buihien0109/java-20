token = "eyJhbGciOiJIUzM4NCJ9.eyJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJoaWVuQGdtYWlsLmNvbSIsImlhdCI6MTY4ODEyOTU4OCwiZXhwIjoxNjg4MjE1OTg4fQ.XYWNssGWpaOluek-ISgA2SPyuOoOOvyCswd8JaXRkOq1CI-NR_eQ2B4h_WuyREm_"
localStorage.setItem("jwtToken", token);


const fetchData = () => {
    const jwtToken = localStorage.getItem("jwtToken")
    fetch("https://lime-embarrassed-duck.cyclic.app/feedback", {
        headers : {
            "Authorization" : `Bearer ${jwtToken}`
        }
    })
        .then(res => res.json())
        .then(res => renderFeelback(res))
        .catch(err => console.log(err))
}

const tableContentEl = document.querySelector("tbody");
const renderFeelback = (list) => {
    tableContentEl.innerHTML = "";
    let html = "";
    list.forEach(f => {
        html += `
            <tr>
                <td>${f.id}</td>
                <td>${f.user_name}</td>
                <td>${f.rating}</td>
                <td>${f.text}</td>
            </tr>
        `
    })
    tableContentEl.innerHTML = html;
}

fetchData();

let numbers = [1,2,3];
let a = 10;

const changeValue = (arr, number) => {
    arr[0] = 10;
    number = 20;
}

changeValue(numbers, a);
console.log(numbers);
console.log(a);