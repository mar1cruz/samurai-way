import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>
}


type DialogsType = {
    id: number
    name: string
}

type MessageType = {
    id: number,
    message: string
}
const Dialogs = () => {
    const dialogsData: DialogsType[] = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},
    ]

    const messagesData: MessageType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsData.map(dialog => {
                    return (
                        <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
                    )
                })}

            </div>

            <div className={s.messages}>
                {messagesData.map(message => {
                    return (
                        <Message key={message.id} message={message.message}/>
                    )
                })}
            </div>
        </div>
    )
};

export default Dialogs