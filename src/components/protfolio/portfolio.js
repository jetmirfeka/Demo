import React from "react"
import "./style.scss"
const portfolio = props => {
  let list = props.list ? props.list : null
  return (
    <div className="gallery">
      {list !== null
        ? list.map((res, index) => {
            return (
              <div key={res.id}>
                { index <= props.count ? (
                  <div  className="mb-3 pics animation all 2">
                    <img
                      className="img-fluid"
                      src={res.path}
                      alt="Card image cap"
                    />
                  </div>
                ) : null}
              </div>
            )
          })
        : null}
    </div>
  )
}

export default portfolio
