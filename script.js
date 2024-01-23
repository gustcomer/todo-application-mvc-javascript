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
    this.app.append(this.title, this.form)
  }
}

const app = new View()