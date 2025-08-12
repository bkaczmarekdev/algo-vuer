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
import ArrayCell from './ArrayCell.vue'

const { arrayInput } = defineProps<{ arrayInput: number[] }>()
</script>

<template>
  <Table>
    <TableBody>
      <TableRow>
        <TableCell>Input</TableCell>
        <TableCell class="font-medium" v-for="(value, key) in arrayInput" :key="'index' + key">
          <ArrayCell :value="value" :color="'gray'" />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
