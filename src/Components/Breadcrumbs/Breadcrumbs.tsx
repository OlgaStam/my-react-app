import React from 'react'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import { useLocation, Link as RouterLink } from 'react-router-dom'

const AppBreadcrumbs: React.FC = () => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    return (
        <Breadcrumbs aria-label="breadcrumb" className="container">
            <Link
                component={RouterLink}
                to="/"
                color="inherit"
                style={{ textDecoration: 'none' }} // Убираем подчеркивание
            >
                {/* Использование Unicode символа домика */}
                <span style={{ marginRight: 4 }}>🏠</span>
                Головна
            </Link>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
                const isLast = index === pathnames.length - 1

                return isLast ? (
                    <Typography key={routeTo} color="textPrimary">
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Typography>
                ) : (
                    <Link
                        key={routeTo}
                        component={RouterLink}
                        to={routeTo}
                        color="inherit"
                    >
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Link>
                )
            })}
        </Breadcrumbs>
    )
}

export default AppBreadcrumbs
