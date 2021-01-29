import * as React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, Link, graphql } from "gatsby"
// @ts-ignore
// import imgBg6 from "../../static/img/bg/bg6.jpg"
// @ts-ignore
import imgWhite from "../../static/logo-white.png"
// @ts-ignore
// import imgF from "../../static/img/shape/f.png"

interface IState {
  email: string
  submitted: boolean
  menuItems: any[]
}

export default class Footer extends React.Component<any, IState> {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      submitted: false,
      menuItems: [
        {
          text: "Podcast",
          href: "/podcast",
        },
      ],
    }
  }

  onSubmit = () => {

  }

  handleChange = event => {
    this.setState({
      email: event.currentTarget.value,
    })
  }

  render() {
    const { menuItems } = this.state
    return (
      <footer className="footer">
        <div className="footer__container">
          <Link to="/">
            <picture>
              <source srcSet={imgWhite} type="image/webp" />
              <source srcSet={imgWhite} type="image/jpeg" />
              <img src={imgWhite} alt="logo" className="footer__logo" />
            </picture>
          </Link>
          <ul className="footer__nav">
            {menuItems.map(item => {
              return (
                <li key={item.href} className="footer__nav-item">
                  <Link to={item.href} className="footer__nav-link">
                    {item.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="footer__legal-notice">
            Copyright <i className="far fa-copyright" />
            {" "}2018{" - "}
            {new Date().getFullYear()} Tous droits réservés
          </div>
        </div>
      </footer>
    )
  }

  renderOld() {
    const submitDisabled = !this.state.email
    return (
      //<!-- footer-area-start -->
      <div
        className="footer-area pt-200"
        style={{
          // backgroundImage: `url(${imgBg6})`,
          background: "#002916",
        }}
      >
        <div className="container">
          <div className="footer-bg pb-50">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-wrapper mb-30">
                  <div className="footer-logo">
                    {/* <a href="/">
                      <img src={imgWhite} alt="" />
                    </a> */}
                  </div>
                  <div className="footer-text">
                    {/* <p>
                      Lorem ipsum dolor amet cons adipisicing elit sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam quis nostrud exercitation
                      ullamco laboris nisi ut aliquip exea commodo consequat.
                    </p> */}
                  </div>
                  <div className="footer-icon">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.instagram.com//">
                      <i className="fab fa-instagram" />
                    </a>
                    {/* <a href="#">
                      <i className="fab fa-linkedin" />
                    </a> */}
                    {/* <a href="#">
                      <i className="fab fa-youtube" />
                    </a> */}
                  </div>
                </div>
              </div>
              {/*<div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-wrapper pl-45 mb-30">
                   <div className="footer-title">
                    <h4>Customer Support</h4>
                    <img src={imgF} alt="" />
                  </div>
                  <ul className="fotter-menu">
                    <li>
                      <a href="#">Help and Ordering</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Return & Cancellation</a>
                    </li>
                    <li>
                      <a href="#">Delevery Schedule</a>
                    </li>
                    <li>
                      <a href="#">Get a Call</a>
                    </li>
                    <li>
                      <a href="#">Online Enquiry</a>
                    </li>
                  </ul>
                </div>
              </div> */}
              {/*<div className="col-xl-3 col-lg-3 col-md-6">
                <div className="footer-wrapper pl-45 mb-30">
                   <div className="footer-title">
                    <h4>Contact Info</h4>
                    <img src={imgF} alt="" />
                  </div>
                  <ul className="fotter-link">
                    <li>
                      <i className="far fa-paper-plane" />
                      205 Olazu Familia, Herba Street Front USA
                    </li>
                    <li>
                      <i className="far fa-envelope-open" />
                      <a
                        href="http://bdevs.net/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="dda7b2b0bca9bcb4b3bbb29dbab0bcb4b1f3beb2b0"
                      >
                        [email&#160;protected]
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-headphones" />
                      002- 01008431112
                    </li>
                  </ul> 
                </div>
              </div>*/}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer-wrapper pl-40 mb-30">
                  <div className="footer-title">
                    <h4>Newsletter</h4>
                    {/* <img src={imgF} alt="" /> */}
                  </div>
                  <div className="footer-content">
                    <p>Entrez votre adresse email pour recevoir les dernières informations.</p>
                  </div>
                  <div className="subscribes-form">
                    <form action="#">
                      <input
                        placeholder="Entrez votre email "
                        type="email"
                        onChange={this.handleChange}
                      />
                      {this.state.submitted ? (
                        <strong style={{ color: "white" }}>Bien reçu !</strong>
                      ) : (
                        <button className="btn" disabled={submitDisabled} onClick={this.onSubmit}>
                          S'abonner
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area">
            <div className="row">
              <div className="col-xl-12">
                <div className="copyright text-center">
                  <p>
                    Copyright <i className="far fa-copyright" /> 2018{" - "}
                    {new Date().getFullYear()} Tous droits réservés
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      //		<!-- footer-area-end --></div>
    )
  }
}
