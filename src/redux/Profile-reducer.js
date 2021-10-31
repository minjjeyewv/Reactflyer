export const addPostActionCreator = () =>{
    return(
        {
            type: ADD_POST
        }
    )
}
export const updatePostTextActionCreator = (text) =>{
    return(
        {
            type: UPDATE_POST_TEXT,
            newText: text
        }
    )
}
let profileDefaultState =  {
    postData: [
        {
            post: "Hello react",
            id: "1",
            count: "24"
        },
        {
            post: "I'm 18",
            id: "2",
            count: "11"
        }
    ],
    newPostText: "fixed"
}
const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
let profileReducer = (state = profileDefaultState , action) =>{
    let stateCopy = {...state}
    stateCopy.postData = [...state.postData]
    if (action.type === ADD_POST){
        let newPost = {
            id: 5,
            count: 0,
            post: stateCopy.newPostText
        }
        stateCopy.postData.push(newPost);
        stateCopy.newPostText = '';
    } else if(action.type === UPDATE_POST_TEXT){
        stateCopy.newPostText = action.newText;
    }
    return stateCopy;
}
export default profileReducer