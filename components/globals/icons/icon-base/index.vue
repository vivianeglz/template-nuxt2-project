<script>
export default {
  name: "IconBase",
  props: {
    color: {
      type: String,
      default: "dark",
      validator: value => {
        return ["dark", "light", "colored"].includes(value);
      }
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  },
  computed: {
    className() {
      return `icon--${this.color.value}`
    }
  }
};
</script>
