<script>
export default {
  name: "ButtonPrimary",
  functional: true,
  props: {
    tag: {
      type: String,
      default: "button",
      validator: value => {
        return ["button", "a", "nuxt-link"].includes(value);
      }
    },
    size: {
      type: String,
      default: "s",
      validator(value) {
        return ["s", "m"].includes(value);
      }
    }
  },
  render(h, { props, listeners, children, data }) {
    const tag = props.tag || "button";
    const { attrs } = data;
    return h(
      tag,
      {
        attrs: {
          ...attrs,
          class: `button button--${props.size} button--primary ${data.staticClass || ""}`
        },
        on: attrs?.disabled ? {} : listeners
      },
      children
    );
  }
};
</script>
