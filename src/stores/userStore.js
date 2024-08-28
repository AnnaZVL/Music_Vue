import { defineStore } from 'pinia'

import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const users = ref([{ id: 0, name: 'First user', login: 'a@a.com', password: 'Qwerty@' }])
  const currentUser = ref({ id: null, name: '', login: '', password: '' })

  function addNewUser(user) {
    const newUser = {
      id: generateRandomId(),
      name: '',
      login: user.login,
      password: user.password
    }
    users.value.push(newUser)
    currentUser.value = newUser
    console.log('store login', users)
    return true
  }

  const successfulLogin = (user) => {
    const foundUser = users.value.find((item) => item.login === user.login)
    if (foundUser) {
      currentUser.value = foundUser
      return true
    }
    return false
  }

  function generateRandomId() {
    return Math.random().toString(6).substr(2, 9)
  }
  return {
    currentUser,
    addNewUser,
    successfulLogin
  }
})
