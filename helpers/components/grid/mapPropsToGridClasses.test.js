import mapPropsToGridClasses from "./mapPropsToGridClasses";

describe("Helpers | mapPropsToGridClasses", () => {
  it("Helpers | mapPropsToGridClasses - Should return empty string if attrs are undefined or incorrect", () => {
    expect(mapPropsToGridClasses()).toBe("");
    expect(mapPropsToGridClasses({})).toBe("");
    expect(mapPropsToGridClasses([])).toBe("");
    expect(mapPropsToGridClasses(false)).toBe("");
  });

  it("Helpers | mapPropsToGridClasses - Should return valid html grid classes", () => {
    expect(mapPropsToGridClasses({ s12: "" }, "grid__col")).toBe("grid__col--s12");
    expect(mapPropsToGridClasses({ s12: "", m6: "" }, "grid__col")).toBe("grid__col--s12 grid__col--m6");
    expect(mapPropsToGridClasses({ gutterM: "" }, "grid")).toBe("grid--gutter-m");
  });
});
