<script setup>
import { storeToRefs } from 'pinia'
import { useListStore } from './stores/list'

const list = useListStore()

const { tasks } = storeToRefs(list)
const { handleToggle, handleRemove } = list
</script>

<template>
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
