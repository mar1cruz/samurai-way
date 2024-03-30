import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: PostType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current) {
            props.addPost()
        }

    }

    const onPostChange = () => {
        if (newPostElement.current) props.updateNewPostText(newPostElement.current.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea ref={newPostElement} cols={30} rows={10} value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    );
};

