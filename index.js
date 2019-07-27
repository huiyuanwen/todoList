// init
let list = document.querySelector('#my-todo')
let doneList = document.querySelector('#my-done')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo, true)
}

function addItem(text, isTodo) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  if (isTodo) {
    list.appendChild(newItem)
  } else {
    doneList.appendChild(newItem)
  }
}

// Create
const input = document.querySelector('#newTodo')
input.addEventListener('keypress', function (event) {
  if (event.keyCode == 13) {
    let inputValue = input.value
    if (!inputValue) return;
    addItem(inputValue, true)
  }
})

const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', function (event) {
  let inputValue = input.value
  if (!inputValue) return;
  addItem(inputValue, true)
})

// Delete and check
list.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete') ||
    event.target.tagName === 'LABEL') {
    let li = event.target.parentElement;
    let taskName = li.children[0];
    taskName.classList.toggle('checked')
    li.remove()
    doneList.appendChild(li);
  }
})

doneList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete') ||
    event.target.tagName === 'LABEL') {
    let li = event.target.parentElement
    li.remove()
  }
})