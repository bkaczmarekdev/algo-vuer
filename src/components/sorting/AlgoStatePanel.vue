<template>
  <div class="algo-state-panel">
    <Button @click="previous">
      <span class="icon">◀️</span>
      Previous
    </Button>
    <Button @click="start">
      <span class="icon">▶️</span>
      Start
    </Button>
    <Button @click="pause">
      <span class="icon">⏸️</span>
      Pause
    </Button>
    <Button @click="next">
      <span class="icon">⏭️</span>
      Next
    </Button>
    <select v-model="speed">
      <option value="0.5">0.5x</option>
      <option value="1">1x</option>
      <option value="2">2x</option>
      <option value="3">3x</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import AlgoState from '@/algorithms/AlgoState'
import { ref, watch } from 'vue'
import Button from '../ui/button/Button.vue'

const props = defineProps<{
  algoState: AlgoState
}>()
const speed = ref(1)

watch(speed, (newSpeed: number) => {
  props.algoState.setSpeed(newSpeed)
})

function start() {
  props.algoState.run(speed.value)
}

function pause() {
  props.algoState.pause()
}

function next() {
  props.algoState.nextStep()
}

function previous() {
  props.algoState.previousStep()
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
