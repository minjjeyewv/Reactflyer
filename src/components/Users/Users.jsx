import React from "react";
import axios from "axios";
import userPhoto from "../../img/149071.png"
import styles from "./users.module.css"

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span className={props.selectedPage == p ? styles.selectedPage : ''} onClick={() => {
                            props.onPageChange(p)
                        }}>{p}</span>
                    )
                })}
            </div>
            {
                props.users.map(u => {
                        return (
                            <div>
                                <div>
                                    <img src={u.photos.small == null ? userPhoto : u.photos.small}
                                         className={styles.avatar}/>
                                </div>
                                <div>
                                    {u.following ? <button onClick={() => {
                                        props.userUnfollow(u.id)
                                    }}>UNFOLLOW</button> : <button onClick={() => {
                                        props.userFollow(u.id)
                                    }}>FOLLOW</button>}
                                </div>
                                <div>
                                    {u.name}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                                <div>
                                    {"Moscow "}
                                    {"Russia"}
                                </div>

                            </div>
                        )
                    }
                )
            }

        </div>
    )
}
export default Users