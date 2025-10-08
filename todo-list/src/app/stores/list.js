import { defineStore } from 'pinia'
import { ref } from 'vue'
import * as api from '../services/api'

export const useListStore = defineStore('list', () => {
  const tasks = ref([])

  api.fetchTasks().then((data) => (tasks.value = data))

  return { tasks, handleSubmit, handleToggle, handleRemove }

  async function handleSubmit(value) {
    const newTask = await api.createTask(value)
    tasks.value.push(newTask)
  }

  async function handleToggle(index) {
    const taskToUpdate = tasks.value[index]
    const updatedTask = await api.updateTask(taskToUpdate.id, {
      completed: !taskToUpdate.completed,
    })
    tasks.value[index] = updatedTask
  }

  async function handleRemove(index) {
    const taskToRemove = tasks.value[index]
    await api.removeTask(taskToRemove.id)
    tasks.value.splice(index, 1)
  }
})
