import React from 'react'
import Message from './Message'
import s from './../../p1-main/m1-ui/u1-app/App.module.css'

const messageData = {
    avatar: 'https://media.istockphoto.com/photos/male-silhouette-as-avatar-profile-picture-picture-id519078727?k=20&m=519078727&s=170667a&w=0&h=A0V_zRp9rtXXUnhkxe1LtQ0flX8RKiDTSZ5MMDaQJTY=',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            {/*<hr/>*/}
            <span className={s.title}>homeworks 1</span>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW1
