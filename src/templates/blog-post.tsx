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
      <main id="main-content" className="relative py-28 text-white min-h-screen sm:py-36">
        <BackgroundGlow />
        <Container className="max-w-3xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <header className="mb-10">
              {/* Ensure you access the publicURL property from the image object */}
              {frontmatter.featuredImage && (
                <img
                  src={frontmatter.featuredImage.publicURL}
                  alt={frontmatter.title}
                  className="rounded-xl mb-6 w-full object-cover"
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

          <div className="my-12 rounded-2xl border border-white/10 bg-ink-800 p-8 text-center">
            <p className="mb-4 font-semibold">
              Ready to put this into practice on your own site?
            </p>
            <Button as="a" href="/website-plans" variant="primary" size="large">
              See Website Plans
            </Button>
          </div>

          {frontmatter.faqs && frontmatter.faqs.length > 0 && (
            <section className="my-12">
              <h2 className="mb-4 text-2xl font-bold">FAQs</h2>
              <div className="space-y-4">
                {frontmatter.faqs.map((faq: any, idx: number) => (
                  <details
                    key={idx}
                    className="rounded-xl border border-white/10 bg-ink-800 p-4"
                  >
                    <summary className="cursor-pointer font-semibold">
                      {faq.question}
                    </summary>
                    <p className="mt-2">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex justify-center gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  frontmatter.title
                )}&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
                className="rounded-full bg-ink-800 p-3 transition hover:bg-ink-700"
              >
                {/* Twitter icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M19.633 7.997c.013.278.013.557.013.836 0 8.5-6.473 18.303-18.303 18.303A18.223 18.223 0 010 24.385c.5.057.995.086 1.5.086 3.02 0 5.8-1.023 8.05-2.774-2.8-.057-5.173-1.9-6-4.423.4.07.8.1 1.2.1.58 0 1.14-.086 1.68-.22-2.9-.58-5.08-3.1-5.08-6.08v-.07c.85.47 1.8.75 2.8.78-1.67-1.12-2.78-3-2.78-5.15 0-1.14.3-2.18.8-3.1 3.13 3.85 7.75 6.38 12.97 6.58-.1-.47-.15-1-.15-1.5 0-3.6 2.9-6.5 6.5-6.5 1.85 0 3.5.78 4.7 2.04.5-.1.9-.3 1.3-.5-.2.5-.5.9-.9 1.2.4-.05.8-.16 1.2-.33-.3.46-.7.86-1.1 1.2z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  url
                )}&title=${encodeURIComponent(frontmatter.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="rounded-full bg-ink-800 p-3 transition hover:bg-ink-700"
              >
                {/* LinkedIn icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <button
                onClick={handleCopy}
                aria-label="Copy link"
                className="rounded-full bg-ink-800 p-3 transition hover:bg-ink-700"
              >
                {/* Copy icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 stroke-current"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 17v1a2 2 0 002 2h5a2 2 0 002-2v-1" />
                  <rect x="7" y="3" width="12" height="15" rx="2" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-ink-800 p-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready for a website that grows with you?
            </h2>
            <Button as="a" href="/contact" variant="primary" size="large">
              Book a Free Strategy Call
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

// This query is now updated to select the 'publicURL' of the featured image
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
        featuredImage {
          publicURL
        }
        faqs {
          question
          answer
        }
      }
    }
  }
`;

export default BlogPostTemplate;