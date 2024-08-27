import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import authHeader from '@/services/AuthHeader'

import type { Checklist } from '@/assets/types'

const API_URL = 'http://94.74.86.174:8080/api/'

function localDeepCopy(value: any) {
  return JSON.parse(JSON.stringify(value))
}

export const useListStore = defineStore('list', () => {
  const checklistDefault = {
    id: 0,
    name: '',
    items: null,
    checklistCompletionStatus: false
  }
  const list = ref<Checklist[]>([localDeepCopy(checklistDefault)])
  const listItems = ref(null)

  function setLists(list: any) {
    list.value = list
  }
  const getLists = computed(() => list)

  async function fetchLists() {
    axios.get(API_URL + 'checklist', { headers: authHeader() }).then((response) => {
      list.value = response.data.data
    })
  }

  async function createNewList(payload: { name: string }) {
    axios.post(API_URL + 'checklist', payload, { headers: authHeader() }).then((response) => {})
  }
  async function deleteListById(listId: string) {
    axios.delete(API_URL + 'checklist/' + listId, { headers: authHeader() })
  }

  async function getAllItemByList(listId: string) {
    axios
      .get(API_URL + 'checklist/' + listId + '/item', { headers: authHeader() })
      .then((response) => {
        listItems.value = response.data.data
      })
  }

  async function createNewListItem(listId: string, payload: { itemName: string }) {
    axios.post(`${API_URL}checklist/${listId}/item`, payload, { headers: authHeader() })
  }

  async function getItem(listId: string, itemId: string) {
    axios
      .get(`${API_URL}checklist/${listId}/item/${itemId}`, { headers: authHeader() })
      .then((response) => {
        listItems.value = response.data.data
      })
  }

  async function updateItemStatus(listId: string, itemId: string) {
    axios.put(`${API_URL}checklist/${listId}/item/${itemId}`, { headers: authHeader() })
  }

  async function deleteItem(listId: string, itemId: string) {
    axios.delete(`${API_URL}checklist/${listId}/item/${itemId}`, { headers: authHeader() })
  }

  async function renameItem(listId: string, itemId: string, payload: { itemName: string }) {
    axios.put(`${API_URL}checklist/${listId}/item/rename/${itemId}`, payload, {
      headers: authHeader()
    })
  }

  return {
    fetchLists,
    setLists,
    getLists,
    createNewList,
    deleteListById,
    getAllItemByList,
    createNewListItem,
    getItem,
    updateItemStatus,
    deleteItem,
    renameItem
  }
})
