```
  /app (routing)
    /layout.tsx (Root layout)
    /page.tsx (Children view)
    /globals.css
    /routingFolder
  /components
  /public
  /src(optional)
    /app(optional)
```

- Default every page within nextjs is a `Server side Component`
- Server side component does not support react hooks


```js
  export const metadata = {
    "title": {
      "absolute": "My page Title",
      "template": "%s | Ecommerce Page"
    },
    "description": "",
    "keywords": ["value1","value2"],
    "authors": [{"name": "Sandesh Bhattarai"}]
    "openGraph" : {
      "title": "",
      "description": "",
      "url": "",
      "siteName": "website Name",
      "images": [
        {
          "url": "",
          "width": 1200,
          "height": 630
        }
      ],
      "locale": "en_US",
      "type": "website"
    },
    "twitter": {
      "card": "summary_large_image",    // twitter card type
      "title": "twitter title"
      "description": "Twitter Description",
      "images": ["images1Url"]
    }
  }
```


- deployment 
  - 