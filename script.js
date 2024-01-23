class View {
  constructor() {
    this.app = document.querySelector('#root')
    this.title = document.createElement('h1')
    this.title.textContent = 'Hello World'
    this.app.append(this.title)
  }
}

const app = new View()