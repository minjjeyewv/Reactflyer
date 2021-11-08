

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = "SET_CURRENT_PAGE"
const SETTOTALUSERSCOUNT = "SETTOTALUSERSCOUNT"
export let usersDefaultState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    selectedPage: 1
}
let usersReducer = (state = usersDefaultState, action) => {
    if (action.type === FOLLOW) {
        return (
            {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return (
                            {
                                ...u, following: true
                            }
                        )
                    }
                    return u
                })
            }
        )

    }
    else if (action.type === UNFOLLOW) {
        return (
            {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return (
                            {
                                ...u, following: false
                            }
                        )
                    }
                    return u
                })
            }
        )
    }
    else if (action.type === SETUSERS){
        return {...state, users: [...action.users]}
    }else if (action.type == SETCURRENTPAGE){
        return {...state, selectedPage: action.selectedPage}
    }else if (action.type == SETTOTALUSERSCOUNT){
        return {...state, totalUsersCount: action.totalUsersCount}
    }
    else{
    return state}

}
export let userFollowAC = (userID) => {
    return (
        {
            type: FOLLOW,
            id: userID
        }
    )
}
export let userUnfollowAC = (userID) => {
    return (
        {
            type: UNFOLLOW,
            id: userID
        }
    )
}
export let setUsersAC = (users) =>{
    return(
        {
            type: SETUSERS,
            users: users

        }
    )
}
export let setCurrentPageAC = (selectedPage) => {
    return(
        {
            type: SETCURRENTPAGE,
            selectedPage: selectedPage

        }
    )
}
export let setTotalUsersCountAC = (totalUsersCount) => ({type: SETTOTALUSERSCOUNT, totalUsersCount})
export default usersReducer;