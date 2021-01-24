import * as React from "react"

import "../../static/css/main.css"
import "../../static/css/overwrite.css"
import "../../static/css/custom.css"

import Footer from "../components/footer"

export default class Layout extends React.Component<any, any> {
  render() {
    return (
      <>
        {this.props.children}
        <Footer />
      </>
    )
  }
}
