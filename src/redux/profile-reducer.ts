import {ActionType, ProfilePageType} from "./state";

export type AddPostAC = ReturnType<typeof addPostActionCreator>;
export type UpdateNewPostTextAC = ReturnType<typeof updateNewPostTextActionCreator>;



const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            return {...state, posts: [{id: 5, message: state.newPostText, likesCount: 0}, ...state.posts], newPostText: ''}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newPostText}
        }

        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST',
    } as const;
};

export const updateNewPostTextActionCreator = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText
    } as const
}

export default profileReducer
