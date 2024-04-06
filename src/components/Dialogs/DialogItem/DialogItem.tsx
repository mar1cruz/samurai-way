import React from "react";
import { NavLink } from "react-router-dom";
import { DialogType } from "../../../redux/dialogs-reducer";
import classes from "../Dialogs.module.css"

export const DialogItem = (props: DialogType) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={`${classes.dialogItem} ${classes.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}