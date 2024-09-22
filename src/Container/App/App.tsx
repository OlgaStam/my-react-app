import React from 'react'

import { StyledEngineProvider } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../../Pages/Home/Home'
import Contact from '../../Pages/Contact/Contact'
import Price from '../../Pages/Price/Price'
import Serve from '../../Pages/Serve/Serve'
import './App.scss'
import AppBreadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs'
import UpButton from '../../Components/UpButton/UpButton'
const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <Header />
            <Container>
                {/* Хлебные крошки */}
                <AppBreadcrumbs />
                <UpButton />
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
