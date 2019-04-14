module.exports = {
  siteMetadata: {
    title: `Omeda TBS`,
    description: `A sandbox for Omeda TBS.`,
    author: `@delster`,
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // CSS-in-JS (Styled Components)
    `gatsby-plugin-styled-components`,
    // Image Optimization
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // PWA + Offline functionality
    `gatsby-plugin-offline`,
  ],
}
