import s from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
    return(
        <div className={s.content}>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
            <div className={s.content}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;