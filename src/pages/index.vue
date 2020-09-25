<template>
  <main>
    <h2 class="blogs-logo">blog</h2>
    <div class="blogs-area">
      <blog-article v-for="blog in blogs" :key="blog.id" v-bind="blog" />
    </div>
  </main>
</template>

<script>
import { blogs } from "~/contents/index.js";
import BlogArticle from "~/components/BlogArticle.vue";
export default {
  components: {
    BlogArticle,
  },
  data() {
    return {
      blogs,
    };
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 10%;
}
.blogs-area {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  color: black;
}
.blogs-logo {
  margin: 30px;
  padding: 0;
  font-weight: normal;
}
</style>
