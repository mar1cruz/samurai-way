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
    subscribe: (observer: any) => void
    getState: () => StatePropsType
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostAC | UpdateNewPostTextAC

export type AddPostAC = {
    type: 'ADD-POST'
}

export type UpdateNewPostTextAC = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
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
                {id: 12, message: 'Hi'},
                {id: 22, message: 'How are you?'},
                {id: 32, message: 'Hello'},
                {id: 42, message: 'Yo'},
                {id: 52, message: 'Yo'},
                {id: 62, message: 'Yo'},
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
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST': {
                const newPost = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0}

                this._state.profilePage.posts.unshift(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()

                break
            }
            case 'UPDATE-NEW-POST-TEXT': {
                this._state.profilePage.newPostText = action.newPostText
                this._callSubscriber()

                break
            }

            default:
                return store._state
        }
    }
}

export default store