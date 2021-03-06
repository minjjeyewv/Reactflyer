export const updateNewMessageText = (text) =>{
    return(
        {
            type: UPDATE_NEW_MESSAGE,
            newMessage: text
        }
    )
}
export const sendNewMessageText = () =>{
    return(
        {
            type: SEND_NEW_MESSAGE,
        }
    )
}
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
let dialogsDefaultState =  {
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
let dialogsReducer = (state = dialogsDefaultState, action) => {
    let stateCopy = {...state};
    stateCopy.messagesData = [...state.messagesData];
    if(action.type === SEND_NEW_MESSAGE){
        let body = stateCopy.newMessageText;
        stateCopy.messagesData.push({id: 6, message: body });
        stateCopy.newMessageText = '';
    } else if (action.type === UPDATE_NEW_MESSAGE){
        stateCopy.newMessageText = action.newMessage;
    }
    return stateCopy;

}
export default dialogsReducer;