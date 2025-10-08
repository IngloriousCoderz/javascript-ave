const tasks = [
  { id: 1, title: 'Learn Express', completed: true },
  { id: 2, title: 'Get back to work', completed: false },
]

export function readTasks() {
  return tasks
}

export function readTaskById(id) {
  const index = tasks.findIndex((task) => task.id === id)
  return tasks[index]
}

export function createTask(body) {
  const maxId = tasks.length ? tasks[tasks.length - 1].id : 0
  const createdTask = { ...body, id: maxId + 1 }
  tasks.push(createdTask)
  return createdTask
}

export function updateTask(id, body) {
  const index = tasks.findIndex((task) => task.id === id)
  const updatedTask = { ...tasks[index], ...body, id }
  tasks[index] = updatedTask
  return updatedTask
}

export function replaceTask(id, body) {
  const index = tasks.findIndex((task) => task.id === id)
  const replacedTask = { ...body, id }
  tasks[index] = replacedTask
  return replacedTask
}

export function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id)
  const deletedTask = tasks[index]
  tasks.splice(index, 1)
  return deletedTask
}
