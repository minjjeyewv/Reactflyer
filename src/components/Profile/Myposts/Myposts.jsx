import s from "./Myposts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/state";
const Myposts = (props) => {
    let posts = props.postData.map((post) => {
        return (
            <Post message = {post.post} count = {post.count}/>
        )
    });
    let newPostElement = React.createRef();
    let newPost = () =>
    {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updatePostTextActionCreator(text));
    }
    return(
        <div>
            <div>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            </div>
            <div>
            <button onClick={newPost}>Добавить</button>
            </div>
            <div className={s.content}>
                <h3>My posts</h3>
            </div>
            {posts}
        </div>
    )
}
export default Myposts;