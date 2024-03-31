import {ActionType, DialogsPageType} from "./state";

export type UpdateNewMessageTextAC = ReturnType<typeof updateNewMessageTextActionCreator>;
export type sendMessageAC = ReturnType<typeof sendMessageActionCreator>;


const dialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.newMessageText}
        }
        case "SEND-MESSAGE": {
            return {...state, messages: [...state.messages, {id: 12, message: state.newMessageText}], newMessageText: ''}
        }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

export const updateNewMessageTextActionCreator = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText
    } as const
}

export default dialogsReducer