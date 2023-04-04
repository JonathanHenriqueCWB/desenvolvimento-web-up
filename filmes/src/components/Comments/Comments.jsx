import React from 'react'

const Comments = props => {

    const comentarios = props.comentarios[0]
    const resultado = comentarios.comentario.map((comment, i) => {
        return <div>
            <div key={i.toString()}>
                <span>por imagem auqi</span>
                <span>{comment.user}</span>
            </div>
            <div key={i.toString()}>
                <div style={{textIndent: "50px"}}>{comment.comentario}</div>
                <hr />
            </div>
        </div>
    })

    return (
        <div style={{color: "#ffbf00"}}>
            <div className='text-center'>
                <br /><br />
                <h3>{comentarios.filme}</h3>
            </div>
            <div>
                {resultado}
            </div>
        </div>
    )
}

export default Comments