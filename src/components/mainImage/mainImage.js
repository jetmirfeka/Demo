import React from 'react';
import './style.scss';
const mainImage = (props) => {
    let image = props.imgBackground;
    return (
        <div style={{backgroundImage:`url(${image})`}} className="background-image">
            <div className="container texts">
                <div className="texts">
                    <h3>{props.text1}</h3>
                    <h1>{props.text2}</h1>
                </div>
            </div>
        </div>
    )
}

export default mainImage
