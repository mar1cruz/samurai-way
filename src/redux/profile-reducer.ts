export type PostType = {
  id: number
  message: string
  likesCount: number
}

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export type ProfileReducerActionType = AddPostActionType
  | UpdateNewPostTextActionType

export type ProfileStateType = typeof profileState

let profileState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ] as PostType[],
  newPostText: 'it-kamasutra.com'
}

const profileReducer = (state: ProfileStateType = profileState, action: ProfileReducerActionType): ProfileStateType => {
  switch (action.type) {
    case "ADD-POST": {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case "UPDATE-NEW-POST-TEXT": {
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST"
  } as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText
  } as const
}

export default profileReducer;