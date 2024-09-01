import { defineStore } from 'pinia'

import { ref } from 'vue'

import generateRandomId from '@/helpers/randomId'

export const useTrackStore = defineStore('trackStore', () => {
    const newTrack = ref({
        id: null,
        trackName: '',
        trackSinger: '',
        autotText: '',
        autorMusic: '',
        trackDate: '',
        trackDateTik: '',
        audio: '',
        img: '',
    })

    function addTrack(data) {    
        for (const key in data) {
            if (data[key] !== '') {
                newTrack.value[key] = data[key]
            }
        }   
        newTrack.value.id = generateRandomId()
        console.log('track store', newTrack.value);
    }

    return {
        newTrack,
        addTrack
    }
})
 