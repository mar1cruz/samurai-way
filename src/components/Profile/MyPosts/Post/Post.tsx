import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
}
export const Post = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://distribution.faceit-cdn.net/images/4413d42d-f482-4b71-91fc-367c0dad8d50.jpeg" alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

