import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPageType} from "../../redux/state";


type DialogPropsType = {
    state: DialogsPageType

}


const Dialogs = ({state}: DialogPropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>

            <div className={s.messages}>
                {state.messages.map(m => <Message key={m.id} message={m.message}/>)}
            </div>
        </div>
    )
};

export default Dialogs