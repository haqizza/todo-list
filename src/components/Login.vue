<script setup lang="ts">
import { ref } from 'vue'
import AuthService from '../services/AuthService'

const username = ref('haqizza')
const password = ref('1234abcd')

const login = async () => {
  AuthService.login({
    username: username.value,
    password: password.value
  })
}
</script>

<template>
  <div>
    <div>Username</div>
    <input type="text" v-model="username" />
    <div>Password</div>
    <input type="password" v-model="password" />
    <button @click="login">Login</button>
  </div>
</template>

<style scoped></style>
