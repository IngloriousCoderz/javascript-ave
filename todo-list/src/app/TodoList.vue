<script setup>
defineProps(['tasks'])
const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <ul>
    <li v-for="(task, index) of tasks" :key="task.id">
      <span :class="{ completed: task.completed }" @click="emit('toggle', index)">{{
        task.title
      }}</span>
      &nbsp;
      <button @click="emit('remove', index)">x</button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  opacity: 0.5;
  text-decoration: line-through;
}
</style>
