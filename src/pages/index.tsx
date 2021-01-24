import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

interface IState {}

export default class Index extends React.Component<any, IState> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <SEO title="Accueil" />
        <Header withHero={true} />
      </Layout>
    )
  }
}
