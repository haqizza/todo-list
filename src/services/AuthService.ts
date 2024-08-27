import axios from 'axios'
import router from '../router/index'

const API_URL = 'http://94.74.86.174:8080/api/'

class AuthService {
  login(user: { username: any; password: any }) {
    return axios
      .post(API_URL + 'login', {
        username: user.username,
        password: user.password
      })
      .then((response) => {
        const data = response.data
        if (data.data.token) {
          localStorage.setItem('user', JSON.stringify(data.data))
        }
        router.push('/home')
      })
  }

  logout() {
    localStorage.removeItem('user')
  }

  register(user: { email: any; username: any; password: any }) {
    return axios
      .post(API_URL + 'register', {
        email: user.email,
        username: user.username,
        password: user.password
      })
      .then((response: any) => {
        const data = response.data
        console.log(data.data.message)
        router.push('/')
      })
  }
}

export default new AuthService()
