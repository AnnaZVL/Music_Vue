import { defineStore } from 'pinia'

import { ref } from 'vue'

export const useStateStore = defineStore('stateStore', () => {
    const typeDownload = ref('track')

    function changeDownloads(type) {        
        typeDownload.value = type
        console.log('store', typeDownload);
    }

    return {
        typeDownload,
        changeDownloads
    }
})
 