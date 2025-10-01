<script setup>
import { ref } from 'vue'

import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'
import TodoForm from './TodoForm.vue'

const text = ref('')

const tasks = ref([
  { id: 1, title: 'Learn Vue 3', completed: true },
  { id: 2, title: 'Go to work', completed: false },
])

function handleInput(value) {
  text.value = value
}

function handleSubmit() {
  const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
  const newTask = { id: maxId + 1, title: text.value, completed: false }
  tasks.value.push(newTask)

  text.value = ''
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

  <TodoForm :text="text" @input="handleInput" @submit="handleSubmit" />

  <TodoList :tasks="tasks" @toggle="handleToggle" @remove="handleRemove" />
</template>
