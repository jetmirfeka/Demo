import React from "react"
import "./style.scss"

const divider = props => {
  const icon = props.icon
  return (
    <div className="col-md-4 col-sm-6">
      <div style={{ backgroundColor: props.bgColor }} className="divider">
        <div className="border-icon">{icon}</div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default divider
