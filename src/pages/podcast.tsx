import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Img from "gatsby-image"
const slugify = require("slugify")

export default class Podcast extends React.Component<any, any> {
  render() {
    const episodes = this.props.data.allMdx.nodes.filter(item => item.frontmatter.draft === false)

    return (
      <Layout>
        <SEO title="Podcast" description="Hello" />
        <Header />
        <main className="content blog-list">
          <section className="content__row content__row--bleed static-header__header">
            <h1 className="static-header__title content__row">Podcast</h1>
            <div className="content__row " style={{ paddingBottom: 0 }}>
              <p>Hello</p>
            </div>
          </section>
          <section className="content__row content__row--overlap podcast">
            <h2 className="content__row-title">{/*Épisodes*/}</h2>
            <ul className="product-grid product-grid">
              {episodes.map(this.renderCardForPublished)}
            </ul>
          </section>
        </main>
      </Layout>
    )
  }

  renderCardForPublished = (item, index) => {
    const { title, summary, featuredImage } = item.frontmatter
    const href = "/podcast/" + slugify(title.toLowerCase(), { lower: true, strict: true })
    return (
      <li key={index} className="product-grid__item blog-card">
        <Link to={href}>
          <figure className="js-figure-link product-grid__item-figure js-figure-link">
            <picture>
              <Img
                fluid={featuredImage.childImageSharp.fluid}
                alt={title}
                className="product-grid__item-image product-grid__item-image--featured"
              />
            </picture>
          </figure>
        </Link>
        <div className="product-grid__definition">
          <h3 className="product-grid__title">
            <Link to={href}>{title}</Link>
          </h3>
          {/* <span className="product-grid__category">{summary}</span> */}
        </div>
      </li>
    )
  }
}

export const pageQuery = graphql`
  query PodcastEpisodeList {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/podcast/" } }
    ) {
      nodes {
        frontmatter {
          title
          summary
          draft
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
