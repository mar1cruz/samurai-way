import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    ActionType,
    DialogsPageType
} from "../../redux/state";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

type DialogPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void
}

const Dialogs = ({state, dispatch}: DialogPropsType) => {

    const onClickSendMessage = () => {
        dispatch(sendMessageActionCreator())
    }

    const onChangeNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)}
            </div>

            <div className={s.messages}>
                <div>{state.messages.map(m => <Message key={m.id} message={m.message}/>)}</div>

                <div>
                    <div><textarea placeholder='enter your message' value={state.newMessageText}
                                   onChange={onChangeNewMessage}></textarea></div>
                    <div>
                        <button onClick={onClickSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs