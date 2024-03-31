import profileReducer, {AddPostAC, UpdateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {sendMessageAC, UpdateNewMessageTextAC} from "./dialogs-reducer";

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
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostType[],
    newPostText: string
}
export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ActionType = AddPostAC | UpdateNewPostTextAC | UpdateNewMessageTextAC | sendMessageAC
type StoreType = {
    _state: StatePropsType
    _callSubscriber: () => void
    subscribe: (observer: any) => void
    getState: () => StatePropsType
    dispatch: (action: ActionType) => void
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
            dialogs: [
                {id: 11, name: 'Dimych'},
                {id: 21, name: 'Andrey'},
                {id: 31, name: 'Sveta'},
                {id: 41, name: 'Sasha'},
                {id: 51, name: 'Valera'},
                {id: 61, name: 'Viktor'},
            ],
            messages: [
                {id: 12, message: 'Hi'},
                {id: 22, message: 'How are you?'},
                {id: 32, message: 'Hello'},
                {id: 42, message: 'Yo'},
                {id: 52, message: 'Yo'},
                {id: 62, message: 'Yo'},
            ],
            newMessageText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber()
    }
}

export default store