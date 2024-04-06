import React from "react";
import classes from "./MyPosts.module.css"
import { Post } from "./Post/Post";
import { ProfileStateType } from "../../../redux/profile-reducer";

type MyPostsType = {
  addPost: () => void
  updateNewPostText: (text: string) => void
} & ProfileStateType

export const MyPosts = (props: MyPostsType) => {
  let postsElements =
    props.posts.map((post) => <Post id={post.id} message={post.message} likesCount={post.likesCount} />);

  let newPostElement = React.createRef<HTMLTextAreaElement>()

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    if (newPostElement.current) {
      props.updateNewPostText(newPostElement.current.value);
    }
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}
