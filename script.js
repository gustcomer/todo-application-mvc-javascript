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
    this.title.textContent = 'Todo List'
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
    this.displayTodos()
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

    if(this.model.todos.length == 0) {
      const p = document.createElement('p')
      p.textContent = "No tasks in your todo list."
      this.todoList.append(p)
    }
    else{
      this.model.todos.forEach(todo => {
        const li = document.createElement('li')
        const span = document.createElement('span')
        span.textContent = todo
        li.append(span)
        this.todoList.append(li)
      })
    }
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