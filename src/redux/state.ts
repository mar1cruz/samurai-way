import {observe} from "web-vitals/dist/modules/lib/observe";

type DialogsType = {
    id: number
    name: string
}

type MessageType = {
    id: number,
    message: string
}

export type PostType = {
    id: number
    likesCount: number
    message: string
}

export type DialogsPageType = {
    messages: MessageType[]
    dialogs: DialogsType[]
}

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string
}

export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


let rerenderEntireTree = (state: StatePropsType) => {

}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}


export const addPost = () => {
    const newPost = {id: 5, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree(state)
}

export const state: StatePropsType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
        ],
        newPostText: 'dimooon'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hello'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'},
        ],
        dialogs: [
            {id: 11, name: 'Dimych'},
            {id: 21, name: 'Andrey'},
            {id: 31, name: 'Sveta'},
            {id: 41, name: 'Sasha'},
            {id: 51, name: 'Valera'},
            {id: 61, name: 'Viktor'},
        ],
    }
}