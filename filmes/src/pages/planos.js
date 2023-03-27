import React from "react"

import Title from "../components/Title/Title"

const Planos = props => {
    return (
        <div className="container">
            <Title title="Confira nossos planso" text="Confira nossos planso"/>
            <img src={'/assets/images/planos-banner.png'}  className="card-img-top" />

            <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginTop: "10px"}}>
                <div className="col">
                    <div className="card h-100">
                    <img src={'/assets/images/planos.png'}  className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">1 Tela</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                    <img src={'/assets/images/planos.png'}  className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">3 Telas</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                    <img src={'/assets/images/planos.png'}  className="card-img-top" />''
                    <div className="card-body">
                        <h5 className="card-title">5 Telas</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Planos