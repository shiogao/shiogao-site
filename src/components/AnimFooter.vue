<template>
  <footer>
    <nuxt-link to="/" class="footer-inner">&copy; 2020 shiogao</nuxt-link>
  </footer>
</template>

<style scoped>
footer {
  padding: 0 10%;
  height: 250px;
  display: flex;
  flex-flow: column;
}
.footer-inner {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12pt;
  color: black;
  box-shadow: 0 -10px 10px -16px;
  text-decoration: none;
}
</style>