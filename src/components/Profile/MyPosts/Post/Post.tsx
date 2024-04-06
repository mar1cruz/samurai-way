import React from "react";
import classes from "./Post.module.css"
import avatar from "../../../../assets/human-avatar.jpg"

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export const Post = (props: PostType) => {
  return (
    <div key={props.id}>
      <img src={avatar} />
      <div>
        {props.message} <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}
