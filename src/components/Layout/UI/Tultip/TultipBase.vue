<script setup>
import IconTultip from "../SVG/IconTultip.vue";

</script>

<template>
    <div class="tultip">
        <button class="tultip__btn" type="button">
            <IconTultip class="tultip__icon"></IconTultip>          
        </button>
        <p class="tultip__content">Lorem ipsum dolor sit, amet consectetur
            adipisicing
            elit.
            Necessitatibus magni modi, adipisci cumque, minus nulla tenetur pariatur
        </p>
    </div>
</template>

<style scoped>
.tultip {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 20px;
    transform: translateY(-50%);
    height: 20px;
}

.tultip__btn {
    padding: 0;
    outline: none;
    background-color: transparent;
    border: 1px solid transparent;
}

.tultip__icon {
    width: 20px;
    height: 20px;
    fill: var(--color-white);
}

.tultip__content {
    padding: 10px;
    position: absolute;
    bottom: -135px;
    left: 50%;
    z-index: 10;
    transform: translateX(-50%);
    font-size: 18px;
    background-color: var(--color-bg);
    border-radius: 20px;
    min-width: 300px;
    opacity: 0;    
    visibility: visible;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}

.tultip__btn:hover + .tultip__content {    
    opacity: 1;
    visibility: visible;
}
</style>