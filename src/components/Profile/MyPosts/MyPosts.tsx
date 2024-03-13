import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../index";

type MyPostsPropsType = {
    postsData: PostType[]
}

export const MyPosts = (props: MyPostsPropsType) => {


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
                {props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    );
};

