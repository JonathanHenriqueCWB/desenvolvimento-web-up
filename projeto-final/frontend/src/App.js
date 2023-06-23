import {BrowserRouter as Router} from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

// Components
import Navbar from "./components/layout/Header"
import Footer from './components/layout/Footer'

// router -> routes -> route
import Routes from './configRoutes'

function App(){
    return(
        <div style={{backgroundColor: '#e6ffe6'}}>
            <Router>
                <Navbar />
                <Container>
                    <Routes />
                </Container>
                <Footer />
            </Router>
        </div>
    )
}

export default App

// HOME: App -> confiRoutes -> pages -> components
// DETALHES: Card (Componente) -> detelhes (Page) -> Detalhes(Component) 