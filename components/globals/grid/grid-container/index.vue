<script>
import mapPropsToGridClasses from "@/helpers/components/grid/mapPropsToGridClasses";

export default {
  name: "GridContainer",
  functional: true,
  render(h, { props, listeners, children, data }) {
    const tagProp = props.tag || "div";
    return h(
      tagProp,
      {
        attrs: {
          class: `grid ${mapPropsToGridClasses(props, "grid")} ${data.staticClass || ""}`
        },
        on: listeners
      },
      children
    );
  }
};
</script>
