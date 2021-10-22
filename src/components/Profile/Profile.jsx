import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Myposts from "./Myposts/Myposts";
import Post from "./Myposts/Post/Post";

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo />
            <Myposts postData={props.postData} addPost={props.addPost} newPostText={props.newPostText} updatePostText={props.updatePostText}/>
        </div>
    )
}
export default Profile;