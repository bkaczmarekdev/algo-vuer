<template>
  <div class="algo-state-panel">
    <button @click="start">
      <span class="icon">▶️</span>
      Start
    </button>
    <button @click="pause">
      <span class="icon">⏸️</span>
      Pause
    </button>
    <button @click="next">
      <span class="icon">⏭️</span>
      Next
    </button>
    <select v-model="speed">
      <option value="1">1x</option>
      <option value="2">2x</option>
      <option value="3">3x</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import AlgoState from '@/algorithms/AlgoState'
import { ref } from 'vue'

const props = defineProps<{
  algoState: AlgoState
}>()
const speed = ref(1)

function start() {
  props.algoState.run(speed.value)
}

function pause() {
  props.algoState.pause()
}

function next() {
  props.algoState.nextStep()
}
</script>

<style scoped>
.algo-state-panel {
  display: flex;
  gap: 1rem;
}
button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
.icon {
  font-size: 1.2rem;
}
</style>
