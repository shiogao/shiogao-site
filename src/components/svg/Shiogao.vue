<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0,0,64,64"
    :width="width"
    :height="height"
  >
    <circle cx="32" cy="32" r="31" fill="white" stroke="black" />
    <g id="eye">
      <circle cx="18" cy="24" r="2" />
      <path d="M17,23q3,-2 6,0" fill="transparent" stroke="black" />
    </g>
    <use xlink:href="#eye" transform="translate(15)" />
    <path d="M24,27v2" fill="transparent" stroke="black" />
    <path d="M24,33q4,0 4,-1" fill="transparent" stroke="black" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "64px",
    },
    height: {
      type: String,
      default: "64px",
    },
  },
};
</script>