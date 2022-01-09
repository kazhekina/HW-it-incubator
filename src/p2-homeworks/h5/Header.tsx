import React from 'react'
import { NavLink } from 'react-router-dom';
import { PATH } from './TaskRoutes';
import s from './HW5.module.css'

function Header() {
    let navClass = (({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.link)
    return (
        <div className={s.wrapperHeader}>
            <div className={s.links}>
                <NavLink className={navClass} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                <NavLink className={navClass} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={navClass} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </div>
            <div className={s.headerMove}></div>
        </div>
    )
}

export default Header
