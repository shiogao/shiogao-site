<template>
  <header :class="{ 'header-active': isActive }">
    <div class="inner">
      <nuxt-link to="/">
        <shiogao width="32px" height="32px" />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
import Shiogao from "~/components/svg/Shiogao.vue";
export default {
  components: {
    Shiogao,
  },
  data() {
    return {
      isActive: true,
      pageYOffset: 0,
    };
  },
  methods: {
    onScroll(e) {
      const pageYOffset = window.pageYOffset;
      this.isActive = pageYOffset < this.pageYOffset;
      this.pageYOffset = pageYOffset;
    },
  },
  mounted() {
    window.addEventListener("scroll", (e) => {
      this.onScroll(e);
    });
  },
};
</script>

<style scoped>
header {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100vw;
  height: 80px;
  top: -90px;
  transition-property: top;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;
}
.header-active {
  top: -20px;
}
.inner {
  padding-top: 20px;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  pointer-events: all;
}
.inner a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 60px;
}
</style>