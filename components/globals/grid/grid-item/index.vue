<script>
import mapPropsToGridClasses from "@/helpers/components/grid/mapPropsToGridClasses";

export default {
  name: "GridItem",
  functional: true,
  render(h, { props, listeners, children, data }) {
    const tagProp = props.tag || "div";
    return h(
      tagProp,
      {
        attrs: {
          class: `grid__col ${mapPropsToGridClasses(props, "grid__col")} ${data.staticClass || ""}`
        },
        on: listeners
      },
      children
    );
  }
};
</script>
