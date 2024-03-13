import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsType, MessageType} from "../../index";


type DialogPropsType = {
    dialogsData: DialogsType[]
    messageData: MessageType[]
}


const Dialogs = (props: DialogPropsType) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>

            <div className={s.messages}>
                {props.messageData.map(m => <Message key={m.id} message={m.message}/>)}
            </div>
        </div>
    )
};

export default Dialogs