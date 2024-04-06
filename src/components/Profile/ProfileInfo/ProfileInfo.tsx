import React from "react";
import classes from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}
