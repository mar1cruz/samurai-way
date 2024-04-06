import React from "react";
import { MessageType } from "../../../redux/dialogs-reducer";
import classes from "../Dialogs.module.css"

export const Message = (props: MessageType) => {
  return <div key={props.id} className={classes.message}>{props.message}</div>
}