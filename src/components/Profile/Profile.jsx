import s from "./Profile.module.css";
import Myposts from "./Myposts/Myposts";
import Post from "./Myposts/Post/Post"
const Profile = () => {
    return(
        <div className={s.content}>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            <div className={s.content}>
                ava + description
            </div>
            <Myposts/>
            <Post message = "Hello react" count="12"/>
            <Post message="I'm 18" count="33"/>
        </div>
    )
}
export default Profile;