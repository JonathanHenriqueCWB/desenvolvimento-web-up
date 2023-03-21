import React from "react"

const Planos = props => {
    return (
        <div className="container">
            <img src={'/assets/images/planos-banner.png'}  className="card-img-top" />

            <div class="row row-cols-1 row-cols-md-3 g-4" style={{marginTop: "10px"}}>
                <div class="col">
                    <div class="card h-100">
                    <img src={'/assets/images/planos.png'}  className="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">1 Tela</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={'/assets/images/planos.png'}  className="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">3 Telas</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card h-100">
                    <img src={'/assets/images/planos.png'}  className="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">5 Telas</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>                
            </div>

        </div>
    )
}

export default Planos