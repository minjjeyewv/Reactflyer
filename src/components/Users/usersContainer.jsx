
import {connect} from "react-redux";
import {
    setCurrentPage,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    userFollowAC,
    userUnfollowAC
} from "../../redux/Users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
class UsersAPIComponent extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChange = (p) =>{
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i<=pagesCount; i++){
            pages.push(i);
        }
        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize} selectedPage={this.props.selectedPage} onPageChange={this.onPageChange} users={this.props.users} userUnfollow={this.props.userUnfollow} userFollow={this.props.userFollow}/>
        )
    }
}
let mapStateToProps = (state) => {
    return (
        {
            users: state.UsersPage.users,
            totalUsersCount: state.UsersPage.totalUsersCount,
            pageSize: state.UsersPage.pageSize,
            selectedPage: state.UsersPage.selectedPage
        }
    )
}
let mapDispatchToProps = (dispatch) => {
    return {
        userFollow:(userID) => dispatch(userFollowAC(userID)),
        userUnfollow:(userID) => dispatch(userUnfollowAC(userID)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setCurrentPage: (p) => dispatch(setCurrentPageAC(p)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount))

    }
}


let UsersContainer =  connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export default UsersContainer