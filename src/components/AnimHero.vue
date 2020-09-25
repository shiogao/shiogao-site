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
  font-size: 32pt;
  color: white;
  text-shadow: 0 0 2px black;
  margin: 5px;
}
.title .c0 {
  display: inline-block;
  animation: drop 0.2s linear 0s both;
}
.title .c1 {
  display: inline-block;
  animation: drop 0.2s linear 0.2s both;
}
.title .c2 {
  display: inline-block;
  animation: drop 0.2s linear 0.4s both;
}
.title .c3 {
  display: inline-block;
  animation: drop 0.2s linear 0.6s both;
}
.title .c4 {
  display: inline-block;
  animation: dropG 0.2s linear 0.8s both, rotateG 0.2s ease-in 1.4s both;
}
.title .c5 {
  display: inline-block;
  animation: drop 0.2s linear 1s both;
}
.title .c6 {
  display: inline-block;
  animation: drop 0.2s linear 1.2s both;
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
  animation: fadeIn 0.5s linear 1.8s both;
}
@keyframes drop {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes dropG {
  0% {
    transform: translateY(-100px) rotateZ(180deg);
    opacity: 0;
  }
  50% {
    transform: translateY(0px) rotateZ(180deg);
  }
  75% {
    transform: translateY(-10px) rotateZ(180deg);
  }
  100% {
    transform: translateY(0px) rotateZ(180deg);
    opacity: 1;
  }
}
@keyframes rotateG {
  100% {
    transform: translateY(0px) rotateZ(0deg);
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
</style>
