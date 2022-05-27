export default {
  ssr: false,
  target: "static",
  head: {
    title: "template",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Roboto:wght@400;700&display=swap"
      }
    ]
  },
  css: ["@/assets/style/main.scss"],
  plugins: [],
  components: false,
  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/stylelint-module"],
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "/"
  },
  build: {}
};
