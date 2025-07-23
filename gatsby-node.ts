import { GatsbyNode } from 'gatsby';
import path from 'path';

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = `/blog/${path.basename(node.fileAbsolutePath, '.md')}/`;
    createNodeField({ node, name: 'slug', value: slug });
  }
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result: any = await graphql(`
    { allMarkdownRemark { nodes { fields { slug } } } }
  `);

  result.data.allMarkdownRemark.nodes.forEach((node: any) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: { slug: node.fields.slug },
    });
  });
};
