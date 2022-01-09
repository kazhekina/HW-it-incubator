import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.wrapper}>
                <img src={props.avatar} alt="" className={s.avatar}/>
            <div className={s.tail}></div>
            <div>
                <div className={s.container}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>


                </div>

            </div>
        </div>
    )
}

export default Message
