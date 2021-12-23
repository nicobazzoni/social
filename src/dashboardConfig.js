export default {
    widgets: [
        {
        name: 'netlify',
        options: {
          title: 'My Netlify deploys',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: 'f777e0a3-b135-4616-b7e7-b295c5ebfee0',
              buildHookId: 'CI= npm run build',
              name: 'socialnico.sanity.studio',
            },
            {
              title: 'notionsocial',
              apiId: 'f777e0a3-b135-4616-b7e7-b295c5ebfee0',
              buildHookId: 'CI= npm run build',
              name: 'sanity-gatsby-blog-20-web',
              url: 'https://my-sanity-deployment.com',
            }
          ]
        }
      }
    ]
  }