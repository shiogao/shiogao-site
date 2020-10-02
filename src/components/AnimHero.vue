<template>
  <div class="hero">
    <div class="wrap">
      <h1 class="title">
        <span class="c0">S</span>
        <span class="c1">h</span>
        <span class="c2">i</span>
        <span class="c3">o</span>
        <span class="c4">g</span>
        <span class="c5">a</span>
        <span class="c6">o</span>
      </h1>
      <div class="sub">
        <shiogao />
        <h2 class="subtitle">stylish face</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Shiogao from "~/components/svg/Shiogao.vue";
export default {
  components: {
    Shiogao,
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-flow: column;
  height: 60vh;
  padding: 0 10%;
}
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  box-shadow: 0 10px 10px -16px;
}
.title {
  display: flex;
  font-size: 32pt;
  color: white;
  text-shadow: 0 0 2px black;
  margin: 5px;
}
.c0,
.c1,
.c2,
.c3,
.c4,
.c5,
.c6 {
  position: relative;
  display: inline-block;
  margin: 0 5px;
}
.c0,
.c1,
.c2,
.c3,
.c5,
.c6 {
  animation-name: drop, fadeIn;
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-fill-mode: both;
}
.c0 {
  animation-delay: 0s;
}
.c1 {
  animation-delay: 0.2s;
}
.c2 {
  animation-delay: 0.4s;
}
.c3 {
  animation-delay: 0.6s;
}
.c4 {
  animation-name: drop, fadeIn, rotate;
  animation-duration: 0.2s;
  animation-timing-function: linear, linear, ease-out;
  animation-fill-mode: both;
  animation-delay: 0.8s, 0.8s, 1.4s;
}
.c5 {
  animation-delay: 1s;
}
.c6 {
  animation-delay: 1.2s;
}
.subtitle {
  margin: 5px;
  font-size: 8pt;
}
.sub {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s ease 1.8s both;
}
@keyframes drop {
  0% {
    top: -50px;
  }
  100% {
    top: 0px;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
