<script setup>
import { ref } from 'vue'

import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import TodoForm from './TodoForm.vue'
import * as api from './services/api'

const tasks = ref([])

api.fetchTasks().then((data) => (tasks.value = data))

async function handleSubmit(value) {
  const newTask = await api.createTask(value)
  tasks.value.push(newTask)

  // optimistic update variant
  // tasks.value.push({ id: 'temp', title: value })
  // try {
  //   const newTask = await api.createTask(value)
  //   tasks.value.pop()
  //   tasks.value.push(newTask)
  // } catch {
  //   tasks.value.pop()
  // }
}

async function handleToggle(index) {
  const taskToUpdate = tasks.value[index]
  const updatedTask = await api.updateTask(taskToUpdate.id, { completed: !taskToUpdate.completed })
  tasks.value[index] = updatedTask
}

async function handleRemove(index) {
  const taskToRemove = tasks.value[index]
  await api.removeTask(taskToRemove.id)
  tasks.value.splice(index, 1)
}
</script>

<template>
  <TodoHeader />

  <TodoForm @submit="handleSubmit" />

  <TodoList :tasks="tasks" @toggle="handleToggle" @remove="handleRemove" />
</template>
