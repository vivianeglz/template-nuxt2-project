<template>
  <div>
    <template v-if="loading">
      <div class="fullscreen-height display-center">
        <loader />
      </div>
    </template>
    <slot v-else />
  </div>
</template>

<script>
import Loader from "../loader";

export default {
  name: "LoadingWrapper",
  components: {
    Loader
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
};
</script>
