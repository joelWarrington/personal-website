module.exports = {
  siteMetadata: {
    title: `Joel Warrington`,
    description: `Joel Warrington's personal website. You can find some of the projects he's been working on as well as his blog.`,
    author: `Joel Warrington <joelwarrington@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00AAAA`,
        theme_color: `#00AAAA`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167094886-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        variationId: "0",
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "joelwarrington.ca",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
