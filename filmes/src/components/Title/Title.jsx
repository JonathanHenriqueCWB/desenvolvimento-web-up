import React from 'react'
import './Title.css'

const Title = props => {

    const { title, text } = props
    
    return (
        <div className="container">
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" style={{color: "#ccc"}}>
                <h1 className="display-4">{title}</h1>
                <p className="lead">{text}</p>
            </div>
        </div>
    )
}

export default Title