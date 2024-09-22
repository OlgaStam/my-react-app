import React from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import { useLocation, Link as RouterLink } from 'react-router-dom'

// Объект для сопоставления пути с украинским названием страницы
const breadcrumbNameMap: { [key: string]: string } = {
    '/': 'Головна',
    '/Contact': 'Контакти',
    '/Price': 'Ціни',
    '/Serve': 'Послуги',
}

const AppBreadcrumbs: React.FC = () => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    const isHomePage = location.pathname === '/'

    return (
        <div className="breadcrumb-container">
            {!isHomePage && (
                <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
                    <Link
                        component={RouterLink}
                        to="/"
                        color="inherit"
                        style={{ textDecoration: 'none' }}
                    >
                        <i
                            className="fas fa-home"
                            style={{ marginRight: 4 }}
                        ></i>{' '}
                        {/* Иконка домика */}
                        {breadcrumbNameMap['/']}
                    </Link>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
                        const isLast = index === pathnames.length - 1
                        const translatedName =
                            breadcrumbNameMap[routeTo] ||
                            name.charAt(0).toUpperCase() + name.slice(1)

                        return isLast ? (
                            <Typography key={routeTo} color="textPrimary">
                                {translatedName}
                            </Typography>
                        ) : (
                            <Link
                                key={routeTo}
                                component={RouterLink}
                                to={routeTo}
                                color="inherit"
                                style={{ textDecoration: 'none' }}
                            >
                                {translatedName}
                            </Link>
                        )
                    })}
                </Breadcrumbs>
            )}
        </div>
    )
}

export default AppBreadcrumbs
