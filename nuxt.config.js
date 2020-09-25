import { blogs } from "./src/contents/index.js";
export default {
  ssr: true,
  srcDir: 'src/',
  css: [
    "normalize.css",
  ],
  modules: [
    '@nuxtjs/markdownit'
  ],
  generate: {
    routes() {
      return blogs.map(item => {
        return `blogs/${item.id}`
      })
    }
  }
}