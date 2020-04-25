import React from 'react'

const layoutDiver = (props) => {
    return (
        <div className="container">
            <div className ="row">
                {props.children}
            </div>
        </div>
    )
}

export default layoutDiver;
