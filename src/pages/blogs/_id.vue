<template>
  <div class="wrap">
    <h1 class="title">{{ info.title }}</h1>
    <time :datetime="info.date">{{ dateText }}</time>
    <div v-html="src"></div>
  </div>
</template>

<script>
import { blogs } from "~/contents/index.js";
export default {
  validate({ params }) {
    return !!blogs.find((el) => el.id === params.id);
  },
  async asyncData({ params }) {
    const src = (await import(`~/contents/blogs/${params.id}.md`)).default;
    const info = blogs.find((el) => el.id === params.id);
    return {
      src,
      info,
    };
  },
  head() {
    return {
      title: this.info.title,
    };
  },
  computed: {
    dateText() {
      let arr = this.info.date.split("-");
      return `${arr[0]}年${arr[1]}月${arr[2]}日`;
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 80%;
  margin: 100px 10%;
}
.title {
  width: 100%;
  border-bottom: #aaaaaa solid 1px;
  text-shadow: 0 0 3px black;
  color: white;
}
</style>