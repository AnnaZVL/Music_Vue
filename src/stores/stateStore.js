import { defineStore } from 'pinia'

import { ref } from 'vue'

export const useStateStore = defineStore('stateStore', () => {
    const typeDownload = ref('')
    const currentStep = ref(1)

    function changeDownloads(type) {        
        typeDownload.value = type;        
    }

    function changeStep(step) {
        currentStep.value = step
        console.log('st store', currentStep.value);
    }
    return {
        typeDownload,
        currentStep,
        changeDownloads,
        changeStep
    }
})
 