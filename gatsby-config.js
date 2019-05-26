module.exports = {
  siteMetadata: {
    title: `Eric Sartorius`,
    description: `A homepage for Eric Sartorius`,
    author: `@The_Epic_Life`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `sans-serif`]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `epic-home`,
        short_name: `epic`,
        start_url: `/`,
        background_color: `#fbfafb`,
        theme_color: `#2f3543`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
