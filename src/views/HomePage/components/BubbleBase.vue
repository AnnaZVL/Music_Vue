<script setup>
import { onMounted, ref } from 'vue'

const bublContainer = ref(null)

const createdot = (initial = false) => {
  const dot = document.createElement('div')
  dot.classList.add('dot')

  dot.style.left = `${Math.random() * 100}%`

    if (initial) {
      dot.style.bottom = `${Math.random() * 100}vh`

      dot.style.animationDelay = `${Math.random() * 10}s`
      dot.style.animationDuration = `${15 + Math.random() * 5}s`
    } else {
      dot.style.bottom = `0vh`
      dot.style.animationDelay = `${Math.random() * 10}s`
      dot.style.animationDuration = `${45 + Math.random() * 5}s`
    }


  bublContainer.value.appendChild(dot)

  dot.addEventListener('animationend', () => {
    dot.remove()
  })
}

onMounted(() => {
  if (bublContainer.value) {
    for (let i = 0; i < 450; i++) {
      createdot(true)
    }

    setInterval(() => createdot(), 500)
  }
})
</script>

<template>
  <div class="bubl__container" ref="bublContainer"></div>
</template>

<style >
.bubl__container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
}

.dot {
  position: absolute;
  bottom: 0;
  width: 3px;
  height: 3px;
  background-color: var(--color-white);
  border-radius: 50%;
  opacity: 0;
  animation: floatUp 10s linear infinite;
}

@keyframes floatUp {
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(-100vh);
    opacity: 1;
  }
}
</style>
