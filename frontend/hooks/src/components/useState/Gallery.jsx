import React, { useState } from 'react'
import data from '../../data/data'

const Gallery = props => {

    const [index, setIndex] = useState(0)
    let sculpture = data[index]

    function handleClick(){
        if(index >= 11){
            setIndex(0)
        }else{
            setIndex(index +1)
        }
    }

    return (
        <div>
            <h1>Gallery</h1>
            <button onClick={handleClick}>NEXT</button>
            <h2><i>{sculpture.name} </i> by {sculpture.artist}</h2>
            <h3>({index + 1} of {data.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.description}</p>
        </div>
    )
}

export default Gallery