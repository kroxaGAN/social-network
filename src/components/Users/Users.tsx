import {userType} from "../../redux/users-reducer";
import s from './Users.module.css'
import defPhoto from "../../Isses/Images/defPhoto.png"
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersProps = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    isFetching:boolean,
    onPageChanged:(page:number)=>void
    usersState: userType[],
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,


    // setUsers: (users: userType[]) => void,
    // setCurrentPage:(currentPage: number)=>void
    // setTotalUsersCount:(totalUsersCount:number)=>void
}


export const Users=(props:UsersProps)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: any = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {/*{pages.map((el:number)=>{<span className={s.selectedPage}>111</span>} )}*/}
                {
                    pages.map((p: number) => {
                        return <span
                            className={props.currentPage === p ? s.selectedPage : s.notSelectedPage}
                            onClick={()=>props.onPageChanged(p)}
                        >{p}</span>
                    })
                }
            </div>

            <h3>Users</h3>
            {/*{this.props.usersState.length===0 && <button onClick={this.getUsersHandler}>Get users</button>}*/}
            {
                props.usersState.map(el =>

                    <div key={el.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${el.id}`} >
                                <img src={el.photos.small ? el.photos.small : defPhoto} className={s.userFoto}
                                     alt={"ava"}/>
                                </NavLink>

                            </div>
                            <div>
                                {el.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{withCredentials:true, headers:{"API-KEY":"26fb8af1-3e7d-4c3b-ab20-99c24ecae36c"}})
                                            .then((res)=>{
                                                if(res.data.resultCode===0){
                                                    props.unFollow(el.id)
                                                }
                                            })


                                    }}>follow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,{},{withCredentials:true, headers:{"API-KEY":"26fb8af1-3e7d-4c3b-ab20-99c24ecae36c"}})
                                            .then((res)=>{
                                                if(res.data.resultCode===0){
                                                    props.follow(el.id)
                                                }
                                            })
                                    }}>unfollow</button>
                                }

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                <div>{"locathion.country"}</div>
                                <div>{"locathion.city"}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>

    )
}
