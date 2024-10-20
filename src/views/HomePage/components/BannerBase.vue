<script setup></script>

<template>
  <section class="banner">
    <div class="banner__body">
      <div class="banner__item">Brand 1</div>
      <div class="banner__item">Brand 2</div>
      <div class="banner__item">Brand 3</div>
      <div class="banner__item">Brand 4</div>
      <div class="banner__item">Brand 5</div>
      <div class="banner__item">Brand 6</div>
      <div class="banner__item">Brand 7</div>
    </div>
    <div class="banner__body">
      <div class="banner__item">Brand 1</div>
      <div class="banner__item">Brand 2</div>
      <div class="banner__item">Brand 3</div>
      <div class="banner__item">Brand 4</div>
      <div class="banner__item">Brand 5</div>
      <div class="banner__item">Brand 6</div>
      <div class="banner__item">Brand 7</div>
    </div>
  </section>
</template>

<style scoped>
.banner {
    margin-bottom: 100px;
    padding: 30px 0;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    background-color: var(--color-white);
}

.banner__body {  
    margin-right: 25px;  
    display: flex;
    align-items: center;
    flex-wrap: nowrap;    
    animation: ticker-kf 30s linear infinite;
}

.banner__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 100px;
    background-color: var(--color-white);
    color: var(--color-gray);
    font-size: 36px;  
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;  
}

.banner__item:hover {
    color: var(--color-blue);
    box-shadow: 0 0 25px rgba(83, 95, 246, 0.65);
    transform: scale(1.05);
}

@keyframes ticker-kf {
    0% {
        transform: translate3d(0, 0, 0);
    }

    100% {
        transform: translate3d(-100%, 0, 0);
    }
} 

@media (max-width: 562px) {
  .banner {
        margin-bottom: 50px;
        padding: 10px 0;
    }

    .banner__item {
        height: 80px;
    }
}
  
</style>
