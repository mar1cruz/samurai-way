import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionType,  PostType, } from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    postsData: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}


export const MyPosts = ({postsData, newPostText, dispatch}: MyPostsPropsType) => {
    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        if (newPostElement.current) {
            dispatch(addPostActionCreator())
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea ref={newPostElement} cols={30} rows={10} value={newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    );
}


