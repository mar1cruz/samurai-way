import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts

            <div>
                <textarea name="" id="" cols={30} rows={10}></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you'/>
                <Post message="It's my first post"/>
            </div>
        </div>

    );
};

