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
      <main className="bg-gradient-to-b from-[#0A2640] to-[#071B30] py-24 text-white min-h-screen">
        <Container className="max-w-3xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <h1 className="mb-2">{post.frontmatter.title}</h1>
            <p className="text-sm text-white/60 mb-10">{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
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
