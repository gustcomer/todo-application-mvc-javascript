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

    this.app.append(this.title, this.form)
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
    this.todos.forEach(todo => {
      console.log(todo);
    })
  }
}

const app = new View()