<script setup>
import StepSection from './StepSection.vue'
import QuestionsBase from './QuestionsBase.vue';
import IconSingle from '@/components/Layout/UI/SVG/IconSingle.vue';
import IconAlbum from '@/components/Layout/UI/SVG/IconAlbum.vue';
import { useStateStore } from '@/stores/stateStore';

const store = useStateStore()

</script>

<template>
    <StepSection title="Что загружаем ?">
        <div class="download__buttons">
            <router-link class="btn step__btn download__btn" :to="{name: 'step2', params:{type: 'track'}}" @click="store.changeDownloads('track')">
                <IconSingle class="download__btn-icon"/>
                <span class="download__btn--text">Сингл</span>
            </router-link>
            <router-link class="btn step__btn download__btn" :to="{name: 'step2', params:{type: 'album'}}" @click="store.changeDownloads('album')">
                <IconAlbum class="download__btn-icon"/>
                <span class="download__btn--text">Альбом</span>
            </router-link>        
        </div>
        <QuestionsBase/>
    </StepSection>
</template>

<style scoped>
.download__buttons  {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
}

.download__btn {
    padding: 10px;
    margin: 0;
    width: 150px;
    min-width: 70px;   
    border: 1px solid var(--color-blue);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--color-white);
    font-size: 24px;
    gap: 10px;
    transition: border 0.3s ease-in-out;
}

.download__btn:focus {
    border-color: var(--color-second);
}

.download__btn:hover {
    border-color: var(--color-second);
}

.download__btn:disabled {
    filter: brightness(50%);
    cursor: not-allowed;
    border-color: var(--color-gray);
}

.download__btn-icon {
    width: 20px;
    height: 20px;
    fill: var(--color-white);
}
</style>