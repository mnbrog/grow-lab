import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/shared/Container';

const BlogPostTemplate = ({ data }: any) => {
  const post = data.markdownRemark;
  return (
    <>
      <Header />
      <main className="py-16 bg-white">
        <Container className="prose mx-auto">
          <h1>{post.frontmatter.title}</h1>
          <p className="text-sm text-gray-500">{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default BlogPostTemplate;
