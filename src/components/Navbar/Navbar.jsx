import s from "./Navbar.module.css";
const Navbar = () =>{
    return(
        <nav className={s.sidebar}>
            <div className={s.item}>
                <a href="/Profile">Profile</a>
            </div>
            <div className={s.item}>
                <a href="/Dialogs">Messages</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Find users</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}
export default Navbar;