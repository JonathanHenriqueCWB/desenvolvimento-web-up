import React from 'react'
///import avatar from './assets/images/avatar/a1.png'
// import avatar from './logo.svg';

const Comments = props => {

    const comentarios = props.comentarios[0]
    const resultado = comentarios.comentario.map((comment, i) => {
        return <div>
            <div key={i.toString()}>
                    <img src={'/assets/images/avatar/' + comment.foto} alt={comment.foto} width={40}/>
                    <span style={{fontSize: "20px", marginLeft: "10px"}}>{comment.user}</span>
            </div>
            <div key={i.toString()}>
                <div style={{textIndent: "50px"}}>{comment.comentario}</div>
                <hr />
            </div>
        </div>
    })

    return (
        <div style={{color: "#ffbf00", background: "#222", marginTop: "50px", borderRadius: "10px", padding: "80px"}}>
            <div className='text-center'>
                <h3>{comentarios.filme}</h3>
            </div>
            <div>
                {resultado}
            </div>
        </div>
    )
}

export default Comments