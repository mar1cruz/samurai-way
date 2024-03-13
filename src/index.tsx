import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogsType = {
    id: number
    name: string
}

const dialogs: DialogsType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Valera'},
    {id: 6, name: 'Viktor'},
]

export type MessageType = {
    id: number,
    message: string
}

const messages: MessageType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Hello'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'},
]

export type PostType = {
    id: number
    likesCount: number
    message: string
}

const postData: PostType[] = [
    {id: 1, message: 'Hi, how are you', likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
]

ReactDOM.render(
    <App dialogsData={dialogs} messageData={messages} postData={postData}/>,
    document.getElementById('root')
);