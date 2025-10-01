<script setup>
defineProps(['text'])
const emit = defineEmits(['input', 'submit'])
</script>

<template>
  <form @submit.prevent="emit('submit')">
    <input
      placeholder="What next?"
      autofocus
      :value="text"
      @input="emit('input', $event.target.value)"
    />
    <button :disabled="!text">Add</button>
  </form>
</template>
