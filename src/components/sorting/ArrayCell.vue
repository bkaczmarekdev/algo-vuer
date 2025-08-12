<script setup lang="ts">
let props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: 'blue',
  },
})
console.log(props.color)
</script>

<template>
  <div :class="`box`" :style="{ backgroundColor: color }">{{ value }}</div>
</template>

<style scoped>
.box {
  width: 30px;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>
