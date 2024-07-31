import { NavLink } from 'react-router-dom'
import './MenuItem.scss'

type Props = {
    to: string
    children: React.ReactNode
    className?: string
}

const MenuItem = ({ to, children, className }: Props) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `${className || ``} ${isActive ? 'menu-item-active' : 'menu-item'}`
            }
            to={to}
        >
            {children}
        </NavLink>
    )
}
export default MenuItem
