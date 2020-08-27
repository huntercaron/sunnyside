module.exports = {
  siteMetadata: {
    title: "Sunnyside",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: "content",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "assets",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              wrapperStyle: "margin: 0",
            },
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "sunnyside",
        short_name: "sunnyside",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "src/assets/sunnyside.jpeg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
