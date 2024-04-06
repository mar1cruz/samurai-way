export type DialogType = {
  id: number
  name: string
}

export type MessageType = {
  id: number
  message: string
}

type SendMessageCreatorActionType = ReturnType<typeof sendMessageCreator>
type UpdateNewMessageBodyCreatorActionType = ReturnType<typeof updateNewMessageBodyCreator>

export type DialogsReducerActionType = SendMessageCreatorActionType
  | UpdateNewMessageBodyCreatorActionType

export type DialogsStateType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessageBody: string
}

let DialogsState: DialogsStateType = {
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
}

const dialogsReducer = (state: DialogsStateType = DialogsState, action: DialogsReducerActionType): DialogsStateType => {
  switch (action.type) {
    case "UPDATE_NEW_MESSAGE_BODY": {
      let copyState = { ...state }
      copyState.newMessageBody = action.body;
      return copyState;
    }
    case "SEND_MESSAGE": {
      let body = state.newMessageBody;
      let copyState = { ...state }
      copyState.newMessageBody = "";
      copyState.messages.push({ id: 6, message: body });
      return copyState;
    }
    default:
      return state;
  }
}

export const sendMessageCreator = () => {
  return {
    type: "SEND_MESSAGE"
  } as const
}
export const updateNewMessageBodyCreator = (body: string) => {
  return {
    type: "UPDATE_NEW_MESSAGE_BODY",
    body
  } as const
}

export default dialogsReducer;