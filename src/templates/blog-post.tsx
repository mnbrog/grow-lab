import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Container from '../components/shared/Container';
import Button from '../components/ui/Button';
import BackgroundGlow from '../components/layout/BackgroundGlow';

const BlogPostTemplate = ({ data }: any) => {
  const post = data.markdownRemark;
  const { frontmatter } = post;
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
              {frontmatter.featuredImage && (
                <img
                  src={frontmatter.featuredImage}
                  alt={frontmatter.title}
                  className="rounded-lg mb-6 w-full object-cover"
                />
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
                {/* Twitter icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M19.633 7.997c...z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(frontmatter.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="rounded-md bg-gray-800/60 p-3 transition hover:bg-gray-700"
              >
                {/* LinkedIn icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M4.98 3.5...z" />
                </svg>
              </a>
              <button
                onClick={handleCopy}
                aria-label="Copy link"
                className="rounded-md bg-gray-800/60 p-3 transition hover:bg-gray-700"
              >
                {/* Copy icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
                  <path d="M8 17v1...z" />
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
        featuredImage
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
