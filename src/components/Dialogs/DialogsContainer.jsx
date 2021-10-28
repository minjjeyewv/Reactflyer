import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import MessageItems from "./Message/MessageItems";
import NamesItems from "./Names/NamesItems";
import {sendNewMessageText, updateNewMessageText} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let onNewMessageClick = () => {
        props.store.dispatch(sendNewMessageText())
    }
    let onNewMessageChange = (text) =>{
        props.store.dispatch(updateNewMessageText(text))
    }


    return(
        <Dialogs onNewMessageClick={onNewMessageClick} onNewMessageChange={onNewMessageChange} DialogsData={props.store.getState().MessagePage.DialogsData}
                 newMessageText={props.store.getState().MessagePage.newMessageText} messagesData={props.store.getState().MessagePage.messagesData}/>
    )
}
export default DialogsContainer;