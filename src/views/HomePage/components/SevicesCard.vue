<script setup>
defineProps({item: Object})
</script>

<template>
  <div class="card">
    <div class="card__top top-icon top-icon--blue">
      <span class="top-icon__back"></span>
      <span class="top-icon__front">
        <component :is="item.icon" class="top-icon__icon" />
        <!-- <svg class="top-icon__icon" width="24px" height="24px" aria-hidden="true">
          <use xlink:href="#user" />
        </svg> -->
      </span>
    </div>
    <div class="card__bottom">
      <h4 class="card__title">{{ item.title }}</h4>
      <p class="card__text">{{ item.text }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
    padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
} 
  
.top-icon {
    background-color: transparent;
    outline: transparent;
    position: relative;
    width: 6.5em;
    height: 6.5em;
    perspective: 24em;
    transform-style: preserve-3d;
    -webkit-tap-highlight-color: transparent;
}

.top-icon__back,
.top-icon__front,
.top-icon__label {
	transition:
		opacity 0.3s cubic-bezier(0.83,0,0.17,1),
		transform 0.3s cubic-bezier(0.83,0,0.17,1);
}

.top-icon__back,
.top-icon__front {
	border-radius: 1.25em;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.top-icon__back {
	background: linear-gradient(hsl(223,10%,50%),hsl(208,10%,50%));
	box-shadow: 0.5em -0.5em 0.75em hsla(223,10%,10%,0.15);
	display: block;
	transform: rotate(15deg);
	transform-origin: 100% 100%;
}

.top-icon__front {
	background-color: hsla(0,0%,100%,0.3);
	box-shadow: 0 0 0 0.125em hsla(0,0%,100%,0.3) inset;
	backdrop-filter: blur(0.75em);
	-webkit-backdrop-filter: blur(0.75em);
	display: flex;
	transform-origin: 80% 50%;
}

.card:nth-child(1) .top-icon__back {
	background: linear-gradient(hsl(223,90%,50%),hsl(208,90%,50%));
}

.card:nth-child(2) .top-icon__back {
	background: linear-gradient(hsl(157,90%,50%),hsl(108,90%,50%));
}

.card:nth-child(3) .top-icon__back {
	background: linear-gradient(hsl(64, 90%, 50%),hsl(58,90%,50%));
}

.card:nth-child(4) .top-icon__back {
	background: linear-gradient(hsl(303,90%,50%),hsl(342, 76%, 49%));
}

.top-icon__icon {
	margin: auto;
	width: 2em;
	height: 2em;
    fill: var(--color-white)
}

.card:focus-visible .top-icon__back,
.card:hover .top-icon__back {
	transform: rotate(18.5deg);
}

.card:focus-visible .top-icon__front,
.card:hover .top-icon__front {
	transform: translateZ(2em) rotateX(20deg) rotateY(20deg);
}

.card__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.card__title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    position: relative;
    width: 100%;
}

.card__title::after {
    content: '';
    width: 30%;
    height: 1px;
    position: absolute;
    bottom: -20px;
    left: 0;    
    transition: width 0.3s ease-in-out;
}

.card:nth-child(1) .card__title::after {
    background-color: hsl(208,90%,50%);
}

.card:nth-child(2) .card__title::after {
    background-color: hsl(108,90%,50%);
}

.card:nth-child(3) .card__title::after {
    background-color: hsl(58,90%,50%);
}

.card:nth-child(4) .card__title::after {
    background-color: hsl(342, 76%, 49%);
}

.card:focus-visible .card__title::after,
.card:hover .card__title::after {
    width: 100%;
}

.card__text {
    text-align: center;
}
</style>
