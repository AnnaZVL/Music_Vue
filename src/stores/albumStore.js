import { defineStore } from 'pinia'

import { ref } from 'vue'

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
        
        console.log('track store', newALbum.value);
    }

    return {
        newALbum,
        addAlbum        
    }
})
 