<script setup>
defineProps({ text: String })
</script>

<template>
  <button class="btn header__link link">
    <span class="link__line link__line--top"></span>
    <span class="link__line link__line--right"></span>
    <span class="link__line link__line--bottom"></span>
    <span class="link__line link__line--left"></span>
    {{ text }}
  </button>
</template>

<style scoped>
.link {
  padding: 10px;
  border-radius: 15px;
  text-align: center;
  color: var(--color-white);
  position: relative;
  overflow: hidden;
  font-size: 18px;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.link:hover {
  -webkit-box-shadow:
    0 0 10px var(--color-blue),
    0 0 40px var(--color-blue),
    0 0 80px var(--color-blue);
  box-shadow:
    0 0 10px var(--color-blue),
    0 0 40px var(--color-blue),
    0 0 80px var(--color-blue);
  background-color: var(--color-blue);
  -webkit-transition-delay: 0.5s;
  -o-transition-delay: 0.5s;
  transition-delay: 0.5s;
}

.link:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  box-shadow: none;
}

.link:disabled:hover {
  box-shadow: none;
  background-color: transparent;
}

.link:disabled:hover .link__line {
  background: transparent;
}

.link__line {
  position: absolute;
  z-index: 10;
  display: block;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.link__line--top {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(transparent),
    to(var(--color-blue))
  );
  background: -o-linear-gradient(left, transparent, var(--color-blue));
  background: linear-gradient(90deg, transparent, var(--color-blue));
}

.link:hover .link__line--top {
  left: 100%;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  -webkit-transition-delay: 0.25s;
  -o-transition-delay: 0.25s;
  transition-delay: 0.25s;
}

.link__line--right {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(transparent),
    to(var(--color-blue))
  );
  background: -o-linear-gradient(bottom, transparent, var(--color-blue));
  background: linear-gradient(0deg, transparent, var(--color-blue));
}

.link:hover .link__line--right {
  top: 100%;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
}

.link__line--bottom {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(transparent),
    to(var(--color-blue))
  );
  background: -o-linear-gradient(right, transparent, var(--color-blue));
  background: linear-gradient(270deg, transparent, var(--color-blue));
}

.link:hover .link__line--bottom {
  right: 100%;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  -webkit-transition-delay: 0.25s;
  -o-transition-delay: 0.25s;
  transition-delay: 0.25s;
}

.link__line--left {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(transparent),
    to(var(--color-blue))
  );
  background: -o-linear-gradient(top, transparent, var(--color-blue));
  background: linear-gradient(180deg, transparent, var(--color-blue));
}

.link:hover .link__line--left {
  bottom: 100%;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
}
</style>
