<script setup>
import { ref } from 'vue'

import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import TodoForm from './TodoForm.vue'

const tasks = ref([
  { id: 1, title: 'Learn Vue 3', completed: true },
  { id: 2, title: 'Go to work', completed: false },
])

function handleSubmit(value) {
  const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
  const newTask = { id: maxId + 1, title: value, completed: false }
  tasks.value.push(newTask)
}

function handleToggle(index) {
  const task = tasks.value[index]
  task.completed = !task.completed
}

function handleRemove(index) {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <TodoHeader />

  <TodoForm @submit="handleSubmit" />

  <TodoList :tasks="tasks" @toggle="handleToggle" @remove="handleRemove" />
</template>
