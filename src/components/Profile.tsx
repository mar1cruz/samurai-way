import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.contentImage} src="https://get.wallhere.com/photo/1998x1080-px-lake-1331651.jpg"
                     alt=""/>
            </div>

            <div>
                {/*<img src="https://w.forfun.com/fetch/fe/fe98bd023477d92f411994258c5f0033.jpeg" alt=""/>*/}
                ava + description
            </div>

            <div>
                My posts

                <div>New Post</div>
                <div className={s.posts}>
                    <div className={s.item}>Post1</div>
                    <div className={s.item}>Post2</div>
                </div>

            </div>
        </div>
    );
};

export default Profile;