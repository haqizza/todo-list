<script setup lang="ts">
import type { Checklist } from '@/assets/types'
import { ref } from 'vue'

defineProps<{ data: Checklist }>()
</script>

<template>
  <div class="bg-green-500 px-4 py-6 border radius-m">
    {{ $props.data.name }}
  </div>
</template>

<style scoped></style>
