import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionType) => void

}

const Profile = ({state, dispatch}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={state.posts}
                     dispatch={dispatch}
                     newPostText={state.newPostText}/>
        </div>
    );
};

export default Profile;