import React, { ChangeEvent } from "react";
import classes from "./Dialogs.module.css"
import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import { DialogsStateType } from "../../redux/dialogs-reducer";

type DialogsType = {
  sendMessage: () => void
  updateNewMessageBody: (value: string) => void
  dialogsPage: DialogsStateType
}

export const Dialogs = (props: DialogsType) => {

  let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);
  let messagesElements = props.dialogsPage.messages.map(message => <Message id={message.id} message={message.message} />);
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageBody(e.target.value);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder='Enter your message'></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  )
}
