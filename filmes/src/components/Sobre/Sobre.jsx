import React from 'react'

const Sobre = props => {
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col-6" style={{color: "#fff"}}>
                    <h2>Conheça um pouco mais sobre nós</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Mollitia voluptas suscipit repellendus debitis voluptatem nesciunt 
                        fugit! Blanditiis id excepturi recusandae a distinctio alias, nihil 
                        fugiat soluta eveniet exercitationem, error ducimus!
                    </p>
                    <h2>Qeum somos</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Mollitia voluptas suscipit repellendus debitis voluptatem nesciunt 
                        fugit! Blanditiis id excepturi recusandae a distinctio alias, nihil 
                        fugiat soluta eveniet exercitationem, error ducimus!
                    </p>
                    <h2>Quando começamoso</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Mollitia voluptas suscipit repellendus debitis voluptatem nesciunt 
                        fugit! Blanditiis id excepturi recusandae a distinctio alias, nihil 
                        fugiat soluta eveniet exercitationem, error ducimus!
                    </p>
                    <h2>Nosso trajeto até aqui...</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Mollitia voluptas suscipit repellendus debitis voluptatem nesciunt 
                        fugit! Blanditiis id excepturi recusandae a distinctio alias, nihil 
                        fugiat soluta eveniet exercitationem, error ducimus!
                    </p>
                </div>
                <div class="col-6" style={{width: "600px"}}>
                <img src={'/assets/images/sobre.png'}  className="card-img-top" />
                </div>
            </div>
        </div>
    )
}

export default Sobre