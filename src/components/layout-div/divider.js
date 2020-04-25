import React from 'react'
import './style.scss'

const divider = (props) => {
    return (
        <div className="col-md-4 col-sm-6">
                <div style={{backgroundColor:props.bgColor}} 
                         className='divider'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default divider
