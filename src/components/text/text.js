import React from "react"
import "./style.scss"
const text = props => {
  return (
    <div className="conatiner">
      <div className="row mt-3">
        <div className="col-md-12 col-sm-12">
          <p className="text-center pl-5 pr-5">{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default text
