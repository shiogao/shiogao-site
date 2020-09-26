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
  },
  head: {
    titleTemplate: '%s - shiogao',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ]
  }
}