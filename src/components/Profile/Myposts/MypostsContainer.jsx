import s from "./Myposts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/Profile-reducer";
import Myposts from "./Myposts";

const MypostsContainer = (props) => {
    let newPost = () =>
    {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        let action = updatePostTextActionCreator(text)
        props.store.dispatch(action);
    }
    return(
        <Myposts onPostChange={onPostChange} newPost={newPost} postData={props.postData} newPostText={props.store.getState().ProfilePage.newPostText}/>
    )
}
export default MypostsContainer;