import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'; 
import { Helmet } from 'react-helmet';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Container from '../../components/shared/Container';
import BackgroundGlow from '../../components/layout/BackgroundGlow';

const BlogIndex = ({ data }: any) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <>
      <Helmet>
        <title>Insights | GrowLab</title>
        <meta name="description" content="Latest articles and insights from the GrowLab team." />
      </Helmet>
      <Header />
      <main className="py-20 text-white bg-gradient-to-b from-[#0A2640] to-[#071B30]">
        <Container>
          <h1 className="text-4xl font-bold text-center mb-12">Insights</h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => {
              // Use the getImage helper to prepare the image data
              const image = getImage(post.frontmatter.featuredImage);

              return (
                <Link
                  key={post.fields.slug}
                  to={post.fields.slug}
                  className="block rounded-xl border border-white/10 bg-gray-900/50 p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/30"
                >
                  {/* Use the GatsbyImage component to display the image */}
                  {image && (
                    <GatsbyImage
                      image={image}
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
              );
            })}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

// I've added the 'excerpt' to your query so it can be displayed in the card.
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 120)
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          author
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 250
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                transformOptions: {cropFocus: CENTER}
              )
            }
          }
        }
      }
    }
  }
`;

export default BlogIndex;