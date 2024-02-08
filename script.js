class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  }

  addTodo(todoText) {
    this.todos.push(todoText)
  }
}

class View {
  constructor(model) {
    this.model = model

    this.app = document.querySelector('#root')
    this.title = document.createElement('h1')
    this.title.textContent = 'Hello World'
    this.form = document.createElement('form')
    this.input = document.createElement('input')
    this.input.type = 'text'
    this.input.placeholder = 'Add todo'
    this.input.name = 'todo'
    this.submitButton = document.createElement('button')
    this.submitButton.textContent = 'Submit'
    this.form.append(this.input, this.submitButton)

    this.todoList = document.createElement('ul')
    this.todoList.classList.add('todo-list')

    this.app.append(this.title, this.form, this.todoList)
  }

  bindAddTodo(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault()

      const todoText = app.view.input.value

      handler(todoText)

      this.displayTodos()
    })
  }

  displayTodos() {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild)
    }

    this.model.todos.forEach(todo => {
      const p = document.createElement('p')
      p.textContent = todo
      this.todoList.append(p)
    })
  }
}

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view

    this.view.bindAddTodo(this.handleAddTodo)
  }

  handleAddTodo = todoText => {
    this.model.addTodo(todoText)
  }
}

const model = new Model()
const app = new Controller(model, new View(model))