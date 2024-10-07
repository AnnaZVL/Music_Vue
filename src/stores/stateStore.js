import { defineStore } from 'pinia'

import { ref } from 'vue'

export const useStateStore = defineStore('stateStore', () => {
    const typeDownload = ref('')
    const currentStep = ref(1)

    function changeDownloads(type) {        
        typeDownload.value = type;        
    }

    function changeStep(step) {
        currentStep.value = step;        
    }
    
    return {
        typeDownload,
        currentStep,
        changeDownloads,
        changeStep
    }
})
 