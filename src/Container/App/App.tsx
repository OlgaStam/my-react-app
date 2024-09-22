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
import AppBreadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs'
import UpButton from '../../Components/UpButton/UpButton'
import './App.scss'
const NotFound = () => <h1>404 - Страница не найдена</h1>

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <Header />
            {/* Хлебные крошки */}
            <AppBreadcrumbs />
            <Container>
                <UpButton />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Price" element={<Price />} />
                    <Route path="/Serve" element={<Serve />} />
                    {/* Обработка 404 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
