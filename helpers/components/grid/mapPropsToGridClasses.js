import _allowedProps from "./_allowedProps";

/**
 * Takes attributes and converts it to valid HTML classes with standard BEM prefixes
 * example : mapAttrsToGridClasses(["s6", "m3"], "grid__col") => "grid__col--s6 grid__col--m3"
 *
 * @param {Object} attrs object of attributes to be converted to valid HTML classes
 * @param {String} className className to prefix to the classes
 * @returns {String}
 */
const mapAttrsToGridClasses = (attrs, className) => {
  if (!attrs || typeof attrs !== "object" || Array.isArray(attrs)) return "";
  const filteredAttrs = Object.keys(attrs).filter(attr => _allowedProps.includes(attr));
  const builtClasses = filteredAttrs
    .map(attr => `${className}--${attr}`)
    .join(" ")
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  return builtClasses;
};

export default mapAttrsToGridClasses;
