// HTML - Attribute Event Handler
const sayHello = () => {
    alert('sayHello');
}

// DOM property Event Handler
const btn2 = document.querySelector('#btn2');
btn2.onclick = function () {
    alert('sayHello2');
}

// AddEventListener Event Handler
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function () {
    alert('sayHello3');
});

