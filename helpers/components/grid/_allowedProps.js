const allowedAttributes = ["s", "m", "l"].reduce((acc, prefix) => {
  for (let index = 1; index < 13; index++) {
    acc.push(`${prefix}${index}`);
  }
  return acc;
}, []);

export default [...allowedAttributes, "noGutter", "gutterS", "gutterM", "gutterL"];
