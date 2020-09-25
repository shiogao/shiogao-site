<template>
  <component :is="id" width="150px" height="150px" />
</template>

<script>
import Shiogao from "~/components/svg/Shiogao.vue";
export default {
  components: {
    Shiogao,
  },
  props: {
    id: {
      type: String,
      default: "shiogao",
    },
  },
};
</script>