<template>
  <div>
    <anim-header />
    <div style="width: 100vw; height: 60px"></div>
    <anim-hero v-if="$route.fullPath === '/'" />
    <nuxt />
    <anim-footer />
  </div>
</template>

<script>
import AnimHeader from "~/components/AnimHeader.vue";
import AnimHero from "~/components/AnimHero.vue";
import AnimFooter from "~/components/AnimFooter.vue";
export default {
  components: {
    AnimHeader,
    AnimHero,
    AnimFooter,
  },
};
</script>

