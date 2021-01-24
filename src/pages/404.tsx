import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
// @ts-ignore
// import img404 from "../../static/img/bg/404.jpg"

export default class NotFoundPage extends React.Component<any, any> {
  render() {
    // TODO afficher les derniers articles
    return (
      <Layout>
        <SEO title="Page non trouvée" />
        <Header />
        <main className="content about">
          <section className="content__row content__row--bleed static-header__header">
            <h1 className="static-header__title content__row">404</h1>
            <div className="content__row static-header__content">
              <h1>Page non trouvée</h1>
              <Link to="podcast" className="btn">
                Retour au podcast
              </Link>
            </div>
          </section>
        </main>
      </Layout>
    )
  }
}
