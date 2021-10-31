
import {sendNewMessageText, updateNewMessageText} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{

            DialogsData: state.MessagePage.DialogsData,
            newMessageText: state.MessagePage.newMessageText,
            messagesData: state.MessagePage.messagesData
        }

}
let mapDispatchToProps = (dispatch) =>{
    return{
            onNewMessageClick: () => {
                dispatch(sendNewMessageText())
            },
            onNewMessageChange: (text) => {
                dispatch(updateNewMessageText(text))
            }
        }

}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;