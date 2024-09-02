import { defineStore } from 'pinia'

import { ref } from 'vue'

import generateRandomId from '@/helpers/randomId'

export const useTrackStore = defineStore('trackStore', () => {
  const newTrack = ref({
    id: null,
    trackName: '',
    trackSinger: '',
    autorText: '',
    autorMusic: '',
    trackDate: '',
    trackDateTik: '',
    audio: '',
    img: ''
  })

  const rezalt = ref(10000)

  function addTrack(data) {
    for (const key in data) {
      if (data[key] !== '') {
        newTrack.value[key] = data[key]
      }
    }
    newTrack.value.id = generateRandomId()
    console.log('track store', newTrack.value)
  }

  function rezaltCheck(props = 0) {
    rezalt.value += props
  }

  function addPromo(cod) {
    const promoCode = {
      one: 1000,
      two: 2000
    }
    console.log(cod, promoCode[cod])
    rezalt.value = rezalt.value - promoCode[cod]
    console.log('store promo', rezalt.value)
  }

  return {
    newTrack,
    rezalt,
    addTrack,
    rezaltCheck,
    addPromo
  }
})
