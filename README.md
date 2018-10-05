# Lite POC Site Search

## Crawler Config

This Lite POC works best with a crawler config that looks like the following. The frontend will hook on an index called `site`.

```
module.exports = {
  startUrls: [],
  actions: [
    {
      indexName: 'site',
      extractors: [
        {
          type: 'custom',
          params: {
            method: ({ $, url }) => {

              // Get URL for objectID
              const objectID = url;

              const title = $('title').text();
              const content = $('main').text().slice(0, 10000)
              const title1 = $('h1').toArray().map(e => $(e).text())
              const title2 = $('h2').toArray().map(e => $(e).text())
              const title3 = $('h3').toArray().map(e => $(e).text())
              const title4 = $('h4').toArray().map(e => $(e).text())

              return [
                {
                  objectID,
                  title,
                  title1,
                  title2,
                  title3,
                  title4,
                  content
                },
              ];
            },
          },
        },
      ],
    },
  ],
  indexSettings: {
    site: {},
  },
};
```