<script setup lang="ts">
import { ref } from 'vue'
import { useListStore } from '../stores/todo'

import List from '../components/List.vue'

const { getLists, fetchLists } = useListStore()
fetchLists()
</script>

<template>
  <div class="flex gap-4">
    <div class="bg-blue-400 m-4 p-2">
      <List v-for="list in getLists" :data="list" :key="list.id" />
    </div>
  </div>
</template>

<style scoped></style>
