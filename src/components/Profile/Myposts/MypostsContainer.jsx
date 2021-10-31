
import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/Profile-reducer";
import {connect} from "react-redux";
import Myposts from "./Myposts";


let mapStateToProps = (state) =>{
    return(
        {
            postData: state.ProfilePage.postData,
            newPostText: state.ProfilePage.newPostText
        }
    )
}
let mapDispatchToProps = (dispatch)=>{
    return(
        {
            onPostChange: (text) => {
                let action = updatePostTextActionCreator(text)
                dispatch(action);
            },
            newPost: () =>{
                dispatch(addPostActionCreator());
            }
        }
    )
}
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)
export default MyPostsContainer;