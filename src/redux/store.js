import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
export let store = {
    _renderTree() {
        console.log("state");
    },
    _state: {
        ProfilePage: {
            postData: [
                {
                    post: "Hello react",
                    id: "1",
                    count: "24"
                },
                {
                    post: "I'm 18",
                    id: "2",
                    count: "11"
                }
            ],
            newPostText: "fixed"
        },
        MessagePage: {
            messagesData: [
                {id: "1",
                    message: "Hi"
                },
                {id: "2",
                    message: "How are you"
                },
                {id: "3",
                    message: "Yo"
                },
                {id: "4",
                    message: "Whats up"
                }
            ],
            DialogsData: [
                {id: "1",
                    name: "Rem"
                },
                {id: "2",
                    name: "Andrew"
                },
                {id: "3",
                    name: "Dima"
                },
                {id: "4",
                    name: "Vlad"
                }
            ],
            newMessageText: ''

        }
    },
    getState(){
        return(this._state)
    },
    subscibe(observer) {
        this._renderTree = observer;
    },
    dispatch(action){
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.MessagePage = dialogsReducer(this._state.MessagePage, action)
        this._renderTree(this._state)
    }
}




