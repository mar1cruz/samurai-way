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
    posts: PostType[]
}

export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const addPost = (postMessage: string) => {
    const newPost = {id: 5, message: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)
}

export const state: StatePropsType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: "It's my first post", likesCount: 11},
        ],
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
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Valera'},
            {id: 6, name: 'Viktor'},
        ],
    }

}