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
  const siteUrl = data.site.siteMetadata.siteUrl;
  const url = `${siteUrl}/blog/`;
  const description =
    'Practical notes on websites, automation, SEO and content for small businesses — from the GrowLab team.';

  return (
    <>
      <Helmet>
        <title>Insights | GrowLab</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Insights | GrowLab" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="GrowLab" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insights | GrowLab" />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <Header />
      <main id="main-content" className="relative text-white">
        <BackgroundGlow />
        <Container className="py-28 sm:py-36">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow mb-4">Insights</p>
            <h1 className="font-heading text-display-sm font-black text-white">
              Notes on building &amp; growing online.
            </h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: any) => {
              // Use the getImage helper to prepare the image data
              const image = getImage(post.frontmatter.featuredImage);

              return (
                <Link
                  key={post.fields.slug}
                  to={post.fields.slug}
                  className="group block h-full rounded-2xl border border-white/10 bg-ink-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/50"
                >
                  {image && (
                    <GatsbyImage
                      image={image}
                      alt={post.frontmatter.featuredImageAlt || post.frontmatter.title}
                      className="mb-5 h-40 w-full rounded-lg object-cover"
                    />
                  )}
                  <p className="mb-2 text-xs text-gray-500">{post.frontmatter.date}</p>
                  <h2 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-accent-300">
                    {post.frontmatter.title}
                  </h2>
                  <p className="line-clamp-3 text-sm text-gray-400">{post.excerpt}</p>
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
    site {
      siteMetadata {
        siteUrl
      }
    }
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
          featuredImageAlt
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