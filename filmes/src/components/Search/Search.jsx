import React from 'react'
import {useState, useEffect} from 'react'

//Components
import Catalogo from '../Catalogo/Catalogo'

const Search = props => {

    // Puxar a api toda aqui > filtrar > passar para Catalogo já filtrado para renderização
    const [listaFilmes, setListaFilmes] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
        .then(response => response.json())
        .then(data => setListaFilmes(data))
        .catch(err => console.error(err))
    }, [])

    console.log(listaFilmes)

    if(!listaFilmes){
        return <p>Carregando...</p>
    }


    return (
        <>
            <div className='container' style={{marginBottom: "30px"}}>
                <div className='row'>
                    <div className='col-md-5'>
                        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">                    
                            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
                            <label class="btn btn-outline-warning" for="btncheck1">Ação</label>

                            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
                            <label class="btn btn-outline-warning" for="btncheck2">Aventura</label>

                            <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
                            <label class="btn btn-outline-warning" for="btncheck3">Comedia</label>

                            <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off" />
                            <label class="btn btn-outline-warning" for="btncheck4">ficção</label>

                            <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off" />
                            <label class="btn btn-outline-warning" for="btncheck5">Terror</label>

                            <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off" />
                            <label class="btn btn-outline-warning" for="btncheck6">Animes</label>

                            <input type="checkbox" class="btn-check" id="btncheck7" autocomplete="off" />
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Titulo</option>
                            <option value="1">Ano</option>
                            <option value="2">Nota</option>
                        </select>
                    </div>

                    <div className='col-md-4'>
                        <form class="d-flex" role="search">
                            <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                    </div>
                </div>                
            </div>
            <Catalogo lista={listaFilmes} />
        </>
    )
}

export default Search