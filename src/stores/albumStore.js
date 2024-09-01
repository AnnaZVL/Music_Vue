import { defineStore } from 'pinia'

import { ref } from 'vue'

import generateRandomId from '@/helpers/randomId'

export const useAlbumStore = defineStore('albumStore', () => {
    const newALbum = ref({
        id: null,        
        img: '',
        tracks: []
    })

    function addAlbum(data) {    
        for (const key in data) {
            if (data[key] !== '') {
                newALbum.value[key] = data[key]
            }
        }   
        newALbum.value.id = generateRandomId()
        
        console.log('track store', newALbum.value);
    }

    return {
        newALbum,
        addAlbum        
    }
})
 