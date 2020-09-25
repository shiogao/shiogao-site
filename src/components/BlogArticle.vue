<template>
  <article>
    <nuxt-link :to="'/blogs/'+id">
      <thumbnail :id="thumbnail" />
      <p>{{title}}</p>
      <time :datetime="date">{{dateText}}</time>
    </nuxt-link>
  </article>
</template>

<script>
import Thumbnail from "~/components/Thumbnail.vue";
export default {
  components: {
    Thumbnail,
  },
  props: {
    id: {
      type: String,
      id: "0",
    },
    title: {
      type: String,
      default: "title",
    },
    date: {
      type: String,
      default: "2000-01-01",
    },
    thumbnail: {
      type: String,
      default: "shiogao",
    },
  },
  computed: {
    dateText() {
      let arr = this.date.split("-");
      return `${arr[0]}年${arr[1]}月${arr[2]}日`;
    },
  },
};
</script>

<style scoped>
article {
  display: flex;
  width: 300px;
  height: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;
  margin: 30px;
}
a {
  text-decoration: none;
  color: black;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100%-30px);
  padding: 20px 0 10px;
}
p {
  font-size: 10pt;
}
time {
  font-size: 8pt;
}
</style>