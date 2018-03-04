class TaskListUi {
  constructor(container) {
    this.container = document.querySelector(container)
    this.list = this.container.querySelector(`${container}__list`)
    this.form = this.container.querySelector(`${container}__form`)
    this.form.taskInput = this.form.querySelector('input')

    this.model = new TaskList()
  }
}
