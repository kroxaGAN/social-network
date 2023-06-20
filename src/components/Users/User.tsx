import {userType} from "../../redux/users-reducer";
import s from './Users.module.css'
import defPhoto from "../../Isses/Images/defPhoto.png"
import {NavLink} from "react-router-dom";

type UsersProps = {
    user:userType
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    followingInProgress: Array<number>,
}


export const User = ({user, ...props}: UsersProps) => {
    return (
        <div>
            {
                    <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small ? user.photos.small : defPhoto} className={s.userFoto}
                                     alt={"ava"}/>
                                </NavLink>

                            </div>
                            <div>
                                {user.followed
                                    ? <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                                        props.unFollow(user.id)
                                    }}>follow</button>
                                    : <button disabled={props.followingInProgress.some(id=>id===user.id)} onClick={() => {
                                        props.follow(user.id)
                                    }}>unfollow</button>
                                }

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"locathion.country"}</div>
                                <div>{"locathion.city"}</div>
                            </span>
                        </span>
                    </div>
            }
        </div>

    )
}
