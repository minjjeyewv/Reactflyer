import s from "./Myposts.module.css";

const Myposts = () => {
    return(
        <div>
            <textarea>

            </textarea>
            <button>Добавить</button>
            <div className={s.content}>
                <h3>My posts</h3>
            </div>
        </div>
    )
}
export default Myposts;