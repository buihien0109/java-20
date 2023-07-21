let todos = [];

const renderTodos = todoList => {
    $("#todo-list").html("");
    if (todoList.length === 0) {
        $("#todo-list").html(`
            <li>Không có công việc nào trong danh sách</li>
        `);
        return;
    }

    let html = "";
    todoList.forEach(t => {
        html += `
            <li>
                <input type="checkbox" ${t.status ? "checked" : ""} onclick="toggleStatus(${t.id})">
                <span class=${t.status ? "active" : ""}>${t.title}</span>
                <button onclick="editTodo(${t.id})">Edit</button>
                <button onclick="deleteTodo(${t.id})">Delete</button>
            </li>
        `
    });
    $("#todo-list").html(html);
}

const fetchTodos = async () => {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/todos",
        success: function (response) {
            todos = response
            renderTodos(todos);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

const createTodo = () => {
    const title = $("#todo-input").val();
    if (title.trim().length === 0) {
        alert("Tiêu đề không được để trống");
        return
    }

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/todos",
        data: JSON.stringify({ title }),
        contentType: 'application/json',
        success: function (response) {
            todos.push(response);
            renderTodos(todos);
            $("#todo-input").val("");
        }
    });
}
$("#btn-add").click(createTodo);

const deleteTodo = id => {
    const isConfirm = window.confirm("Bạn có muốn xóa không?");
    if (isConfirm) {
        $.ajax({
            type: "DELETE",
            url: `http://localhost:8080/api/todos/${id}`,
            success: function () {
                todos = todos.filter(t => t.id !== id);
                renderTodos(todos);
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
}

const editTodo = id => {
    const updatedTodo = todos.find(t => t.id === id);
    const title = window.prompt("Cập nhật tiêu đề", updatedTodo.title);

    if (title === null) {
        return;
    }

    if (title.trim().length === 0) {
        alert("Tiêu đề không được để trống");
        return
    }

    updatedTodo.title = title
    $.ajax({
        type: "PUT",
        url: `http://localhost:8080/api/todos/${id}`,
        data: JSON.stringify(updatedTodo),
        contentType: 'application/json',
        success: function () {
            renderTodos(todos);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

const toggleStatus = id => {
    const updatedTodo = todos.find(t => t.id === id);
    updatedTodo.status = !updatedTodo.status
    $.ajax({
        type: "PUT",
        url: `http://localhost:8080/api/todos/${id}`,
        data: JSON.stringify(updatedTodo),
        contentType: 'application/json',
        success: function () {
            renderTodos(todos);
        },
        error: function (err) {
            console.log(err);
        }
    });
}

$(document).ready(function () {
    fetchTodos();
});