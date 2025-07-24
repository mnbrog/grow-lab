module.exports = {
  siteMetadata: {
    title: "GrowLab",
    description: "Digital products and automation templates for scaling modern businesses.",
    siteUrl: "https://growlab.com",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/data/blog-posts/hello-world.md`,
      },
    },
  ],
};
