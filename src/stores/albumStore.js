import { defineStore } from 'pinia'

import { ref } from 'vue'

import generateRandomId from '@/helpers/randomId'

export const useAlbumStore = defineStore('albumStore', () => {
    const newALbum = ref({
        id: null,        
        img: '',
        tracks: []
    })
    const rezalt = ref(20000)

    function addAlbum(data) {    
        for (const key in data) {
            if (data[key] !== '') {
                newALbum.value[key] = data[key]
            }
        }   
        newALbum.value.id = generateRandomId()
        
        console.log('album store', newALbum.value);
    }

    function rezaltCheck(props = 0) {
        rezalt.value = 10000 + +props
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
        newALbum,
        rezalt,
        addAlbum,
        rezaltCheck,
        addPromo       
    }
})
 