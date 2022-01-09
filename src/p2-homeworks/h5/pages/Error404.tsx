import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.wrapper}>
            <div className={s.border}>
                <div className={s.number}>404</div>
                <div className={s.text}>Page not found!</div>
            </div>
            <div className={s.text}>Oops! Something went wrong!</div>
        </div>
    )
}

export default Error404
