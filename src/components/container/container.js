import React from 'react'


const container = (props) =>{
    return(
        <div className = "container">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

export default container;