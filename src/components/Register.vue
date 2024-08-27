<script setup lang="ts">
import { ref } from 'vue'
import AuthService from '../services/AuthService'

const email = ref('haqizza@gmail.com')
const username = ref('haqizza')
const password = ref('1234abcd')

const register = () => {
  AuthService.register({
    email: email.value,
    username: username.value,
    password: password.value
  })
}
</script>

<template>
  <div>
    <div>Email</div>
    <input type="email" v-model="email" />
    <div>Username</div>
    <input type="text" v-model="username" />
    <div>Password</div>
    <input type="password" v-model="password" />
    <button @click="register">Register</button>
  </div>
</template>

<style scoped></style>
