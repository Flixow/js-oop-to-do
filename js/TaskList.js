class TaskList {
  constructor(list = []) {
    this.list = list
  }

  dodajZadanie(task) {
    this.list.push(task)
  }
}
