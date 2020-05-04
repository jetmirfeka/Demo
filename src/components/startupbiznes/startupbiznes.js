import React from "react"
import "./startupbiznes.scss"
import img_about from "../../assets/images/about-img.jpg"
import { Link } from "gatsby"
const startupbiznes = props => {
  return (
    <div className="container pl-0 background-about mt-5">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img
            src={img_about}
            className="aboutimg img-responsive"
            alt="About img"
          />
        </div>
        <div className="col-md-6 col-sm-12 about-des">
          <h2 className="font-weight-bold">{props.title}</h2>
          <p>{props.text1}</p>
          <p>{props.text2}</p>
          <Link to="/about-us">
            <p className="btn btn-default">LEARN MORE</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default startupbiznes
