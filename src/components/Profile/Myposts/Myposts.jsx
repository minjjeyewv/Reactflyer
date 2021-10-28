import s from "./Myposts.module.css";
import Post from "./Post/Post";
import React from 'react';
const Myposts = (props) => {
    let posts = props.postData.map((post) => {
        return (
            <Post message = {post.post} count = {post.count}/>
        )
    });
    let newPostElement = React.createRef();
    let newPost = () =>
    {
        props.newPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.onPostChange(text)
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