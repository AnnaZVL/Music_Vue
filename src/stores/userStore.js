import { defineStore } from 'pinia'

import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const users = ref([{ id: 0, name: 'first user', login: 'a@a.com', password: 'Qwerty@', img: new URL('@/assets/img/personal_page/albums/Miller.jpg', import.meta.url).href }])
  const currentUser = ref({ id: null, name: '', login: '', password: '', img: '' })
  const isAuthorized = ref(false)

  function addNewUser(user) {
    const newUser = {
      id: generateRandomId(),
      name: 'second User',
      login: user.login,
      password: user.password,
      img: new URL('@/assets/img/personal_page/albums/Kancler.webp', import.meta.url).href
    }
    users.value.push(newUser)
    currentUser.value = newUser
    isAuthorized.value = true
    console.log('store login', users)
    return true
  }

  const successfulLogin = (user) => {
    const foundUser = users.value.find((item) => item.login === user.login)
    if (foundUser) {
      currentUser.value = foundUser
      isAuthorized.value = true
      return true
    }
    return false
  }

  const logout = () => {
    isAuthorized.value = false;
    currentUser.value = { id: null, name: '', login: '', password: '' }
  }

  function generateRandomId() {
    return Math.random().toString(6).substr(2, 9)
  }
  return {
    currentUser,
    isAuthorized,
    addNewUser,
    successfulLogin,
    logout
  }
})
