class View {
  constructor() {
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
    this.todos = JSON.parse(localStorage.getItem('todos')) || []

    this.todoList = document.createElement('ul')
    this.todoList.classList.add('todo-list')

    this.app.append(this.title, this.form, this.todoList)
    this._initListeners()
  }

  _initListeners(){
    this.form.addEventListener('submit', event => {
      event.preventDefault()

      const task_text = app.input.value

      this.todos.push(task_text)

      this.displayTodos()
    })
  }

  displayTodos() {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild)
    }
    
    this.todos.forEach(todo => {
      const p = document.createElement('p')
      p.textContent = todo
      this.todoList.append(p)
    })
  }
}

const app = new View()