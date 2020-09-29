<template>
  <div>
    <anim-hero v-if="$route.fullPath === '/'" />
    <nuxt />
    <anim-footer />
  </div>
</template>

<script>
import AnimHero from "~/components/AnimHero.vue";
import AnimFooter from "~/components/AnimFooter.vue";
export default {
  components: {
    AnimHero,
    AnimFooter,
  },
};
</script>

