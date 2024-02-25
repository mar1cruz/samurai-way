import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.contentImage} src="https://get.wallhere.com/photo/1998x1080-px-lake-1331651.jpg"
                     alt=""/>
            </div>

            <div>
                {/*<img src="https://w.forfun.com/fetch/fe/fe98bd023477d92f411994258c5f0033.jpeg" alt=""/>*/}
                ava + description
            </div>

            <MyPosts/>
        </div>
    );
};

export default Profile;