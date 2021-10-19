import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {
    let posts = props.postData.map((post) => {
        return (
            <Post message = {post.post} count = {post.count}/>
        )
    })
    return(
        <div>
            <div>
            <textarea>
            </textarea>
            </div>
            <div>
            <button>Добавить</button>
            </div>
            <div className={s.content}>
                <h3>My posts</h3>
            </div>
            {posts}
        </div>
    )
}
export default Myposts;