module.exports = {
  siteMetadata: {
    title: `Ryan Samman`,
    author: {
      name: `Ryan Samman`,
      summary: `studying Computer Science at the Faculty of Computing and Information Technology.`,
    },
    description: `Ryan Samman's Personal Blog! I talk about how I've learnt `,
    siteUrl: `https://ryan-samman.vercel.app/`,
    social: {
      twitter: `Ryan_Samman_`,
      github: `RyanSamman`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extentions: [`.mdx`, `.md`],
        defaultLayouts: {
          blog: require.resolve("./src/templates/blog-post.jsx"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          { resolve: `gatsby-remark-prismjs` },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
        ],
      },
    },
    `gatsby-remark-reading-time`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-186119850-1`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Samman's Blog`,
        short_name: `Ryan's Blog`,
        start_url: `/`,
        background_color: `#00457C`,
        theme_color: `#009CDE`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
        icons: [
          {
            src: "content/assets/icons/maskable_icon_x72",
            sizes: "72x72",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "content/assets/icons/maskable_icon_x96",
            sizes: "96x96",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "content/assets/icons/maskable_icon_x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "content/assets/icons/maskable_icon_x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "content/assets/icons/maskable_icon_x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "content/assets/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "content/assets/icons/maskable_icon_x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "content/assets/icons/maskable_icon_x480.png",
            sizes: "480x480",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "content/assets/icons/maskable_icon_x152.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `ryansamman`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-well-known`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /blog/,
              handler: `NetworkFirst`,
              options: {
                networkTimeoutSeconds: 1,
              },
            },
            {
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`,
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\/(page-data|app-data)\.json$/,
              handler: `NetworkFirst`,
              options: {
                networkTimeoutSeconds: 1,
              },
            },
            {
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: `StaleWhileRevalidate`,
            },
            {
              urlPattern: /.*/,
              handler: `CacheFirst`,
            },
          ],
        },
      },
    },
  ],
}
