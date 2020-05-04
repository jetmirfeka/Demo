import React from "react"
import "./style.scss"
import { Link } from "gatsby"
import Logo from "../../assets/images/logo.png"
import Container from "../container/container"
const Footer = () => {
  return (
    <div className="footer-bg">
      <Container>
        <div className="col-md-5 col-sm-4">
          <img className="img-responsive" src={Logo} />
          <p>
            Onetel is free Bootstrap v3.3.5 HTML5 layout from templatemo
            website. Feel free to use it for your website.
          </p>
          <p>
            <i className="fa fa-phone"></i> 010-020-0340
          </p>
          <p>
            <i className="fa fa-envelope-o"></i> info@company.com
          </p>
          <p>
            <i className="fa fa-globe"></i> www.company.com
          </p>
        </div>
        <div className="col-md-3 col-sm-4 mt-3 mb-2">
          <h3>Useful Links</h3>
          <p>
            <Link to="/">HTML5 Templates</Link>
          </p>
          <p>
            <Link to="/">CSS3 Tricks</Link>
          </p>
          <p>
            <Link to="/">Design Blog</Link>
          </p>
          <p>
            <Link to="/">Animations</Link>
          </p>
        </div>
        <div className="col-md-4 col-sm-4 newsletter mt-3 mb-2">
          <h3>Useful Links</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismo.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Footer
