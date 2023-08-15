const inputEl = document.querySelector('input');
const btnEl = document.querySelector('button');
const todoEl = document.getElementById('todo-list');

let todos = [];
window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addTodo(todo));
}
btnEl.addEventListener('click', () => {
    todos.push(inputEl.value);
    localStorage.setItem('todos', JSON.stringify(todos))
    addTodo(inputEl.value)
    inputEl.value = "";
})

function addTodo(todo) {
    let para = document.createElement('p')
    para.innerText = todo;
    todoEl.appendChild(para);
    para.addEventListener('click', () => {
        para.style.textDecoration = "line-through";
        remove(todo);
    })
    para.addEventListener('dblclick', () => {
        todoEl.removeChild(para);
        remove(todo)
    })
}
function remove(todo) {
    let index = todos.indexOf(todo);
    if (index > -1)
        todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}


