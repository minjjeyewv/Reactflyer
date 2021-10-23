import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Myposts from "./Myposts/Myposts";
import Post from "./Myposts/Post/Post";

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo />
            <Myposts postData={props.postData} dispatch={props.dispatch} newPostText={props.newPostText} />
        </div>
    )
}
export default Profile;