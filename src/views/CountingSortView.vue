<script setup lang="ts">
import { reactive } from 'vue'
import CountingSort from '@/algorithms/CountingSort/CountingSort'
import AlgoStatePanel from '@/components/sorting/AlgoStatePanel.vue'
import ArrayTable from '@/components/sorting/ArrayTable.vue'
import ArrayCountingTable from '@/components/sorting/ArrayCountingTable.vue'
import ArrayInputTable from '@/components/sorting/ArrayInputTable.vue'

const algoState = reactive(new CountingSort())
</script>

<template>
  <ArrayInputTable :arrayInput="algoState.input" />
  <ArrayCountingTable :algoState="algoState as CountingSort" />
  <ArrayTable :algoState="algoState" />
  <AlgoStatePanel :algoState="algoState" />
</template>
