<script setup>
import InputTextAgr from './components/InputTextAgr.vue'

import { useTrackStore } from '@/stores/trackStore'
import { useStateStore } from '@/stores/stateStore';
import { useAlbumStore } from '@/stores/albumStore';

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { inject } from 'vue'

const trackStore = useTrackStore()
const stateStore = useStateStore();
const albumStore = useAlbumStore();

const closeModal = inject('sign')

const emits = defineEmits(['successForm'])

const { meta, handleSubmit } = useForm({
  validationSchema: yup.object({
    fio: yup.string().required('Поле обязательно для заполнения'),
    dateUser: yup.string(),
    email: yup.string(),
    snils: yup.string(),
    inn: yup.string(),
    pasportNumber: yup.string(),
    pasportSeries: yup.string(),
    department: yup.string(),
    pasportData: yup.string(),
    pasportCod: yup.string(),
    address: yup.string(),
    recipient: yup.string(),
    bankName: yup.string(),
    checking: yup.string(),
    checkingCorr: yup.string(),
    bik: yup.string()
  })
})

const onSubmit = handleSubmit((values) => {
  const addAgreementData = {
    user: {
      fio: values.fio,
      dateUser: values.dateUser,
      email: values.email,
      snils: values.snils,
      inn: values.inn
    },
    pasport: {
      number: values.pasportNumber,
      series: values.pasportSeries,
      department: values.department,
      date: values.pasportData,
      cod: values.pasportCod,
      address: values.address
    },
    bank: {
      fio: values.recipient,
      name: values.bankName,
      checking: values.checking,
      checkingCorr: values.checkingCorr,
      bik: values.bik
    }
  }
  console.log('agreement')
  if (meta.value.valid) {
    if (stateStore.typeDownload === 'track') {
        trackStore.addTrack({ agreement: addAgreementData })
    } else {
      albumStore.addAlbum({ agreement: addAgreementData })
    }
    closeModal()
    emits('successForm', false)
  }
})
</script>

<template>
  <form class="form-agreement" @submit.prevent="onSubmit">
    <p class="title">Заполните реквизиты договора</p>
    <div class="box">
      <InputTextAgr
        name="fio"
        type="text"
        title="Фамилия, имя, отчество подписанта договора"
        placeholder="Введите Ф.И.О"
      />
      <InputTextAgr name="dateUser" type="date" title="Дата рождения" placeholder="Дата" />
      <InputTextAgr
        name="email"
        type="mail"
        title="Адрес электронной почты"
        placeholder="Введите почту"
      />
      <InputTextAgr name="snils" type="text" title="СНИЛС" placeholder="Введите СНИЛС" />
      <InputTextAgr name="inn" type="text" title="ИНН" placeholder="Введите ИНН" />
    </div>
    <div class="box">
      <p class="subtitle">Паспортные данные</p>
      <InputTextAgr name="pasportNumber" type="text" placeholder="Номер" />
      <InputTextAgr name="pasportSeries" type="text" placeholder="Серия" />
      <InputTextAgr name="department" type="text" placeholder="Кем выдан" />
      <InputTextAgr name="pasportData" type="date" placeholder="Дата выдачи" />
      <InputTextAgr name="pasportCod" type="text" placeholder="Код подразделения" />
      <InputTextAgr name="address" type="text" placeholder="Адрес регистрации" />
    </div>
    <div class="box">
      <p class="subtitle">Банковские реквизиты</p>
      <InputTextAgr
        name="recipient"
        title="Фамилия, имя, отчество получателя"
        type="text"
        placeholder="Введите Ф.И.О"
      />
      <InputTextAgr
        name="bankName"
        title="Нименование банка получателя"
        type="text"
        placeholder="Наименование банка"
      />
      <InputTextAgr name="checking" title="Расчетный счет" type="text" placeholder="Номер счета" />
      <InputTextAgr
        name="checkingCorr"
        title="Корреспондентский счет"
        type="text"
        placeholder="Номер счета"
      />
      <InputTextAgr name="bik" title="БИК банка" type="text" placeholder="БИК" />
    </div>

    <button class="btn form__btn" type="submit">Продолжить</button>
  </form>
</template>

<style scoped>
.form-agreement {
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  overflow-y: auto;
  max-height: 600px;
  height: 100%;
}

.form__btn {
  margin-top: 10px;
  padding: 10px 15px;
  text-align: center;
  font-size: 18px;
  border-radius: 10px;
  color: var(--color-white);
  border: 1px solid var(--color-white);
  background: transparent;
  transition:
    border 0.3s ease-in-out,
    color 0.3s ease-in-out,
    background 0.3s ease-in-out;
}

.form__btn:hover {
  border-color: transparent;
  background-color: var(--color-white);
  color: var(--color-bg);
}

.title {
  margin-bottom: 10px;
  font-size: 24px;
}

.subtitle {
  font-size: 18px;
}

.box {
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 6px;
}

.message {
  font-size: 14px;
  color: var(--color-second);
}
</style>
