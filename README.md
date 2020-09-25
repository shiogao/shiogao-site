# shiogao-site

https://www.shiogao.com

## Getting started

``` sh
npm install
npm run dev
```

And browse http://localhost:3000 .

## Editing a blog

Add a blog information in **contents/index.js**.

``` contents/index.js
export const blogs = [
  # ...
  {
    id: "example",
    title: "example-title",
    date: "2020-09-25",
    thumbnail: "shiogao"
  },
  # ...
]
```

Add **contents/blogs/example.md**.

``` contents/blogs/example.md
# example-markdown-title

hello

## header 2

world
```

## Generate static site

``` sh
npm run generate
```

Files are in **dist** dir.

