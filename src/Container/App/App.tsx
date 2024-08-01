import { StyledEngineProvider } from '@mui/material'
import Footer from 'Container/Footer/Footer'
import Header from 'Container//Header/Header'
import './App.scss'
import Container from '@mui/material/Container'
import { Route, Routes } from 'react-router-dom'
import Home from 'Pages/Home/Home'
import Contact from 'Pages/Contact/Contact'
import Price from 'Pages/Price/Price'
import Serve from 'Pages/Serve/Serve'
const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Price" element={<Price />} />
                    <Route path="/Serve" element={<Serve />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
