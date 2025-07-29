import React from 'react';
import { Link, graphql } from 'gatsby';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Container from '../../components/shared/Container';
import BackgroundGlow from '../../components/layout/BackgroundGlow';

const BlogIndex = ({ data }: any) => (
  <>
    <Header />
    <main className="py-20 text-white bg-gradient-to-b from-[#0A2640] to-[#071B30]">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-12">Insights</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.allMarkdownRemark.nodes.map((post: any) => (
            <Link
              key={post.fields.slug}
              to={post.fields.slug}
              className="block rounded-xl border border-white/10 bg-gray-900/50 backdrop-blur-sm p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/30"
            >
              {post.frontmatter.featuredImage && (
                <img
                  src={post.frontmatter.featuredImage}
                  alt={post.frontmatter.title}
                  className="mb-4 h-40 w-full rounded-md object-cover"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2 text-white group-hover:text-accent transition-colors">
                {post.frontmatter.title}
              </h2>
              <p className="text-sm text-white/60 mb-4">{post.frontmatter.date}</p>
              <p className="text-white/80 text-sm line-clamp-3">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </main>
    <Footer />
  </>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          featuredImage
        }
        excerpt(pruneLength: 100)
        fields {
          slug
        }
      }
    }
  }
`;

export default BlogIndex;
