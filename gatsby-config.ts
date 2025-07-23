import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'GrowLab',
    siteUrl: 'https://growlab.dev',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/blog-posts`,
        name: 'blog',
      },
    },
    'gatsby-transformer-remark',
  ],
};

export default config;
