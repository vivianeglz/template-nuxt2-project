<template>
  <p class="alert-banner" :class="className">
    <slot />
  </p>
</template>

<script>
export default {
  name: "AlertBanner",
  props: {
    type: {
      type: String,
      default: null,
      validator(value) {
        return ["success", "danger", "warning"].includes(value);
      }
    }
  },
  computed: {
    className() {
      return this.type ? `alert-banner--${this.type}` : "";
    }
  }
};
</script>
