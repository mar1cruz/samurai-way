import profileReducer, { ProfileReducerActionType } from "./profile-reducer";
import dialogsReducer, { DialogsReducerActionType } from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

type PostType = {
  id: number
  message: string
  likesCount: number
}

type DialogType = {
  id: number
  name: string
}

type MessageType = {
  id: number
  message: string
}

type ProfilePageType = {
  posts: PostType[]
  newPostText: string
}

type DialogsPageType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageBody: string
}

type SidebarType = {}

type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sidebar: SidebarType
}

type StoreType = {
  _state: StateType
  _callSubscriber: (state: StateType) => void
  getState: () => StateType
  subscribe: (_callSubscriber: (state: StateType) => void) => void
  dispatch: (action: StoreActionTypes) => void
}

type StoreActionTypes = DialogsReducerActionType
  | ProfileReducerActionType

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
      ],
      newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    debugger;
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action: StoreActionTypes) {
    this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileReducerActionType);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsReducerActionType);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;