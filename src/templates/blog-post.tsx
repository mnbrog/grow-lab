import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/shared/Container';
import Button from '../components/ui/Button';
import BackgroundGlow from '../components/layout/BackgroundGlow';

const BlogPostTemplate = ({ data }: any) => {
  const post = data.markdownRemark;
  const { frontmatter } = post;
  const image = getImage(frontmatter.featuredImage);
  const url = `${data.site.siteMetadata.siteUrl}${post.fields.slug}`;
  const productLink = `/products#${frontmatter.productId || ''}`;

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <>
      <Helmet>
        <title>{frontmatter.title} | GrowLab</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Header />
      <main className="relative py-24 text-white min-h-screen">
        <BackgroundGlow />
        <Container className="max-w-3xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <header className="mb-10">
              {image && (
                <GatsbyImage image={image} alt={frontmatter.title} className="rounded-lg mb-6" />
              )}
              <h1 className="mb-2">{frontmatter.title}</h1>
              <p className="text-sm text-white/60">
                {frontmatter.date}
                {frontmatter.author && <> • {frontmatter.author}</>}
                {post.timeToRead && <> • {post.timeToRead} min read</>}
              </p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>

          <div className="my-12 rounded-lg border border-white/10 bg-gray-800/60 p-8 text-center">
            <p className="mb-4 font-semibold">
              {frontmatter.ctaText || 'Like this post? Get the AI Writer for just $19.'}
            </p>
            <Button as="a" href={productLink} size="large">
              Get the Tool
            </Button>
          </div>

          {frontmatter.faqs && frontmatter.faqs.length > 0 && (
            <section className="my-12">
              <h2 className="mb-4 text-2xl font-bold">FAQs</h2>
              <div className="space-y-4">
                {frontmatter.faqs.map((faq: any, idx: number) => (
                  <details key={idx} className="rounded-md border border-white/10 p-4">
                    <summary className="cursor-pointer font-semibold">{faq.question}</summary>
                    <p className="mt-2">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex justify-center gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(frontmatter.title)}&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="rounded-md bg-gray-800/60 p-3 transition hover:bg-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.499-4.187 11.84-11.84 11.84-2.355 0-4.55-.687-6.397-1.875.327.038.654.05.993.05a8.37 8.37 0 005.186-1.788 4.181 4.181 0 01-3.902-2.897c.253.038.506.063.772.063.372 0 .745-.05 1.094-.144a4.175 4.175 0 01-3.348-4.096v-.051a4.22 4.22 0 001.884.522A4.176 4.176 0 013.59 5.94a11.84 11.84 0 008.604 4.368A4.712 4.712 0 0112 9.163c0-2.31 1.874-4.182 4.185-4.182 1.205 0 2.296.51 3.061 1.32a8.324 8.324 0 002.647-1.007 4.16 4.16 0 01-1.84 2.314 8.316 8.316 0 002.395-.65 9.003 9.003 0 01-2.087 2.339z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(frontmatter.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="rounded-md bg-gray-800/60 p-3 transition hover:bg-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98 1.1 0 1.98-.88 1.98-1.98A1.98 1.98 0 004.98 3.5zM3.5 21h2.97V8.48H3.5V21zM8.47 8.48H11.36V10h.04c.4-.74 1.38-1.52 2.84-1.52 3.04 0 3.6 2 3.6 4.7V21h-2.97v-6.24c0-1.49-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.3V21H8.47V8.48z" />
                </svg>
              </a>
              <button
                onClick={handleCopy}
                aria-label="Copy link"
                className="rounded-md bg-gray-800/60 p-3 transition hover:bg-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17v1a3 3 0 003 3h6a3 3 0 003-3v-6a3 3 0 00-3-3h-1M8 7V6a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3h-1m-4 0H6a3 3 0 01-3-3V7a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-16 text-center bg-gray-800/60 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">
              Get the {frontmatter.productName || 'AI Writer'} for {frontmatter.productPrice || '$19'}
            </h2>
            <Button as="a" href={productLink} size="large">
              Get This Tool
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        category
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
        ctaText
        productId
        productName
        productPrice
        faqs {
          question
          answer
        }
      }
    }
  }
`;

export default BlogPostTemplate;
