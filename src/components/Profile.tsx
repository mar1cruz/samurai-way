import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img className='content-image' src="https://get.wallhere.com/photo/1998x1080-px-lake-1331651.jpg"
                     alt=""/>
            </div>

            <div>
                {/*<img src="https://w.forfun.com/fetch/fe/fe98bd023477d92f411994258c5f0033.jpeg" alt=""/>*/}
                ava + description
            </div>

            <div>
                My posts

                <div>New Post</div>
                <div>Post1</div>
                <div>Post2</div>
            </div>
        </div>
    );
};

export default Profile;