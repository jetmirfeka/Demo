import React, { Component } from "react"
import {Link} from 'gatsby';
import './style.scss'
const button = props => {
  return (
    <div className="row text-aligin-center">
      <a onClick={props.click}>
        <p className="btn btn-default">View MORE</p>
      </a>
    </div>
  )
}

export default button
