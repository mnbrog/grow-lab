import React from 'react';
import { Link, graphql } from 'gatsby';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Container from '../../components/shared/Container';

const BlogIndex = ({ data }: any) => (
  <>
    <Header />
    <main className="py-16">
      <Container>
        <h1 className="text-3xl mb-8">Insights</h1>
        <ul className="space-y-6">
          {data.allMarkdownRemark.nodes.map((post: any) => (
            <li key={post.fields.slug}>
              <Link to={post.fields.slug} className="text-accent text-xl hover:text-white">
                {post.frontmatter.title}
              </Link>
              <p className="text-sm text-gray-500 mt-1">{post.frontmatter.date}</p>
            </li>
          ))}
        </ul>
      </Container>
    </main>
    <Footer />
  </>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default BlogIndex;