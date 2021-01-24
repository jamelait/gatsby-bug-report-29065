import * as React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default class PodcastEpisodeMdx extends React.Component<any, any> {
  render() {
    const childMdx = this.props.data.file.childMdx
    const body = childMdx.body
    const { title, date, tags, summary, featuredImage } = childMdx.frontmatter

    return (
      <Layout>
        <SEO title={title} keywords={tags} description={summary} />
        <Header />
        <main className="content blog-post">
          <section className=" content__row--bleed static-header__header">
            <h1 className="static-header__title content__row">{title}</h1>
            <div className="content__row static-header__content">
              <p>{summary}</p>
            </div>
          </section>

          <section className="content__row __section">
            <div className="__section-content-container">
              <div className="faq__answer">
                {/* <Img fluid={featuredImage.childImageSharp.fluid} alt={title} /> */}
                <MDXRenderer>{body}</MDXRenderer>
                <p style={{ textAlign: `right` }}>
                  <i style={{ fontSize: `0.8em` }}>{new Date(date).toLocaleDateString()}</i>
                </p>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($relativePath: String!) {
    file(relativePath: { eq: $relativePath }) {
      childMdx {
        body
        frontmatter {
          title
          date
          summary
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
