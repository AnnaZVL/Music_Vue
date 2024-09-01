<script setup>
import FormDownloads from '@/components/Layout/DownloadsForm/FormDownloads.vue';

import { useForm } from 'vee-validate'
import router from '@/router'

import { useAlbumStore } from '@/stores/albumStore'
import { useStateStore } from '@/stores/stateStore'

const albumStore = useAlbumStore();
const stateStore = useStateStore();

const { meta, handleSubmit } = useForm({})

const onSubmit = handleSubmit(() => {
  console.log(albumStore.newALbum.tracks);
})
</script>

<template>
    <FormDownloads @submit.prevent="onSubmit">

    </FormDownloads>
</template>

<style scoped>
</style>