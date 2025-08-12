<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import ArrayCell from '@/components/sorting/ArrayCell.vue'
import type AlgoStep from '@/algorithms/AlgoStep'
import type AlgoState from '@/algorithms/AlgoState'
import { computed, watch, ref } from 'vue'

const props = defineProps<{
  algoState: AlgoState
}>()

const currentStep = ref({
  array: [] as number[],
  workingIndex: null as number | null,
})

watch(
  () => props.algoState.currentStep,
  (newStep) => {
    if (newStep) {
      currentStep.value = newStep
    } else {
      currentStep.value = {
        array: Array(props.algoState.input.length).fill(0),
        workingIndex: null,
      }
    }
  },
  { immediate: true },
)
</script>
<template>
  <Table>
    <TableBody>
      <TableRow>
        <TableCell>Output</TableCell>
        <TableCell
          class="font-medium"
          v-for="(value, key) in currentStep.array"
          :key="'index' + key"
        >
          <ArrayCell :value="value" :color="currentStep.workingIndex === key ? 'red' : 'blue'" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
