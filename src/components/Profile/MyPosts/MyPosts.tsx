import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MessageType = {
    id: number
    likesCount: number
    message: string
}

export const MyPosts = () => {
    const postData: MessageType[] = [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>

            <div>
                <div>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    postData.map(p => {
                        return (
                            <Post message={p.message} likesCount={p.likesCount}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

