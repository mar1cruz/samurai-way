import React, {RefObject, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType, state} from "../../../redux/state";

type MyPostsPropsType = {
    postsData: PostType[]
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }

    }

    console.log(state)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea ref={newPostElement} cols={30} rows={10}></textarea>
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

