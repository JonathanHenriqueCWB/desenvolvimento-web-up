import {BrowserRouter as Router} from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'

// Components
import Navbar from "./components/Header"
import Footer from './components/Footer'

// router -> routes -> route
import Routes from './configRoutes'

function App(){
    return(
        <Router>
            <Navbar />
            <Container>
                <Routes />
            </Container>
            <Footer />
        </Router>
    )
}

export default App