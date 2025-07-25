const form = document.querySelector('#todoForm');
const addInput = document.querySelector('#todoName');
const todoList = document.querySelector('#todoList');
const firstCardBody = document.querySelectorAll('.list-group')[0];
const secondCardBody = document.querySelectorAll('.list-group')[1];
const clearButton = document.querySelector('#clearButton');


runEvents();

function runEvents() {
    form.addEventListener('submit', addTodo);
}

function addTodo(e) {
    e.preventDefault(); 
    const inputText = addInput.value.trim();

    if (inputText === "") {
        alert("Lütfen bir todo girin");
    } else {
        addTodoToUI(inputText);        
        addTodoToStorage(inputText);   
    }
}

function addTodoToUI(newTodo) {
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement('a');
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement('i');
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";  
    addInput.focus();     
}

function addTodoToStorage(newTodo) {
    const todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodosFromStorage() {
    const todos = localStorage.getItem('todos');
    if (todos === null) {
        return [];
    } else {
        return JSON.parse(todos);
    }
}
