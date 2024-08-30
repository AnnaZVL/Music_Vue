import { defineStore } from 'pinia'

import { ref } from 'vue'

export const useStateStore = defineStore('stateStore', () => {
    const typeDownload = ref('')

    function changeDownloads(type) {        
        typeDownload.value = type;        
    }

    return {
        typeDownload,
        changeDownloads
    }
})
 