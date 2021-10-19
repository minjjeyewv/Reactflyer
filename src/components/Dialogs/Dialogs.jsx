import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import MessageItems from "./Message/MessageItems";
import NamesItems from "./Names/NamesItems";



const Dialogs = (props) => {
    let dialogs = props.DialogsData.map((dialog) => {
        return(
            <NamesItems name={dialog.name} id={dialog.id}/>
        )
    })
    let messages = props.messagesData.map((m) => {
        return(
            <MessageItems message={m.message} id={m.id} />
        )
    })
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    )
}
export default Dialogs;