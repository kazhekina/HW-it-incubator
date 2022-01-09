import React from 'react'
import Header from './Header'
import TaskRoutes from './TaskRoutes'
import { HashRouter } from 'react-router-dom'
import s from './HW5.module.css'

function HW5() {
    return (
        <div className={s.wrapper}>
            <HashRouter>
                <Header/>
                <TaskRoutes/>
            </HashRouter>
        </div>
    )
}

export default HW5
