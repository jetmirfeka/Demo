import React from "react"

const title = props => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">
          <h2 className="text-center font-weight-bold">{props.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default title
