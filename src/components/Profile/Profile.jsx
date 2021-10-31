import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Myposts from "./Myposts/Myposts";
import Post from "./Myposts/Post/Post";
import MypostsContainer from "./Myposts/MypostsContainer";

const Profile = (props) => {
    return(
        <div>
            <ProfileInfo />
            <MypostsContainer />
        </div>
    )
}
export default Profile;