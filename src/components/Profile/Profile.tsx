import React, {ChangeEvent} from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

const Profile = ({state, addPost, updateNewPostText}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={state.posts} addPost={addPost} newPostText={state.newPostText}
                     updateNewPostText={updateNewPostText}/>
        </div>
    );
};

export default Profile;