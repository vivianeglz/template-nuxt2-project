<template>
  <svg
    :width="width"
    :height="height"
    :class="className"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class="icon"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5,5 L19,19 M5,19 L19,5" class="icon__path" />
  </svg>
</template>

<script>
import IconBase from "../icon-base";

export default {
  name: "IconClose",
  extends: IconBase
};
</script>
