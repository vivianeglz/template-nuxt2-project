module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended", "prettier"],
  plugins: ["prettier", "jest"],
  rules: {
    "import/extensions": [
      "error",
      {
        js: "never",
        svg: "never",
        png: "ignorePackages"
      }
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "state", // for vuex state
          "acc", // for reduce accumulators
          "e" // for e.returnvalue
        ]
      }
    ],
    camelcase: ["error", { ignoreDestructuring: true }],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["default"]
      }
    ],
    "import/no-extraneous-dependencies": 0,
    "no-shadow": [
      "error",
      {
        builtinGlobals: false,
        hoist: "functions",
        allow: ["state"]
      }
    ],
    quotes: "off",
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "import/no-unresolved": 0,
    "no-bitwise": 0
  }
};
