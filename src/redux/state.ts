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

type StoreType = {
    _state: StatePropsType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    subscribe: (observer: any) => void
    getState: () => StatePropsType

}

let store: StoreType = {
    _state: {
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
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    addPost() {
        const newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}

        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._callSubscriber()
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    }
}

export default store