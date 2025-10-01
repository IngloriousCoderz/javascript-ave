<script setup>
import { ref } from 'vue'

const text = ref('')

const tasks = ref([
  { id: 1, title: 'Learn Vue 3', completed: true },
  { id: 2, title: 'Go to work', completed: false },
])

function handleInput(event) {
  text.value = event.target.value
}

function handleSubmit() {
  const maxId = tasks.value[tasks.value.length - 1].id
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
  <h1>Todo List</h1>

  <form @submit.prevent="handleSubmit">
    <input placeholder="What next?" autofocus :value="text" @input="handleInput" />
    <button :disabled="!text">Add</button>
  </form>

  <ul>
    <li v-for="(task, index) of tasks" :key="task.id">
      <span :class="{ completed: task.completed }" @click="handleToggle(index)">{{
        task.title
      }}</span>
      &nbsp;
      <button @click="handleRemove(index)">x</button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
