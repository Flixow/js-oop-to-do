class Task {
  constructor(title = '') {
    this.id = Math.random().toString(36).substring(7)
    this.title = title
    this.finished = false
  }
}

class TaskList {
  constructor(list = []) {
    this.list = list
  }

  dodajZadanie(task) {
    this.list.push(task)
  }

  usunZadanie(id) {
    this.list = this.list.filter(zadanie => zadanie.id !== id)
  }
}

class TaskListUi {
  constructor(container) {
    this.container = document.querySelector(container)
    this.list = this.container.querySelector(`${container}__list`)
    this.form = this.container.querySelector(`${container}__form`)
    this.form.taskInput = this.form.querySelector('input')

    this.model = new TaskList()

    this.form.addEventListener('submit', this.zatwierdzFormularz.bind(this))
  }

  renderList() {
    this.list.innerHTML = ''

    this.model.list.forEach(zadanie => {
      const li = document.createElement('li')
      li.textContent = zadanie.title
      const button = document.createElement('button')
      button.textContent = 'Usuń zadanie'

      button.addEventListener('click', () => {
        this.model.usunZadanie(zadanie.id)
        this.renderList()
      })

      li.appendChild(button)
      this.list.appendChild(li)
    })
  }

  zatwierdzFormularz(event) {
    event.preventDefault()

    const text = this.form.taskInput.value
    const task = new Task(text)

    this.model.dodajZadanie(task)

    this.renderList()
  }
}

const widokListyZadan = new TaskListUi('.Todo')
const zadaniepierwsze = new Task('zadanie 1')
console.log(widokListyZadan)
