import {connect} from "react-redux";
import {
    followSuccess,
    setCurrentPage,
    unFollowSuccess,
    userType, setFollowingInProgress, unFollow, follow, requestUsers
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selector";


export type ReturnedDataType = {
    items: userType[],
    totalCount: number,
    error: string[]
}
type UsersProps = {
    usersState: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: userType[]) => void,
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setToggleFetching: (value: boolean) => void
}

// class UsersAPiComponent extends React.Component<UsersProps,any> { ругается на типизацию
class UsersAPiComponent extends React.Component<any,any> {
    // constructor(props:any) {
    //     super(props)
    //     axios.get<ReturnedDataType>('https://social-network.samuraijs.com/api/1.0/users')
    //         .then((res)=>{
    //             this.props.setUsers(res.data.items)
    //         })
    // }
    componentDidMount() {
        this.props.requestUsers(this.props.pageSize,this.props.currentPage)
        // this.props.setToggleFetching(true)
        // axios.get<ReturnedDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,{withCredentials:true, headers:{"API-KEY":"26fb8af1-3e7d-4c3b-ab20-99c24ecae36c"}})
        // userAPI.getUsers(this.props.pageSize,this.props.currentPage)
        //     .then((data) => {
        //         this.props.setTotalUsersCount(data.totalCount)
        //         this.props.setUsers(data.items)
        //         this.props.setToggleFetching(false)
        //     })
    }

    getUsersHandler = () => {
        // if(this.props.usersState.length===0){
        //
        //     axios.get<ReturnedDataType>('https://social-network.samuraijs.com/api/1.0/users')
        //         .then((res)=>{
        //             this.props.setUsers(res.data.items)
        //         })
        //
        // }
        //some commets
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(this.props.pageSize,pageNumber)
        // this.props.setToggleFetching(true)
        // // axios.get<ReturnedDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,{withCredentials:true, headers:{"API-KEY":"26fb8af1-3e7d-4c3b-ab20-99c24ecae36c"}})
        // userAPI.getUsers(this.props.pageSize,pageNumber)
        //     .then((data) => {
        //         this.props.setUsers(data.items)
        //         this.props.setToggleFetching(false)
        //     })
    }

    render() {
        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        // let pages: any = []
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersState={this.props.usersState}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    isFetching={this.props.isFetching}
                    followingInProgress={this.props.followingInProgress}
                    setCurrentPage={this.props.setCurrentPage}
                    requestUsers={this.props.requestUsers}
                    // setFollowingInProgress={this.props.setFollowingInProgress}
                />}
        </>

        // (
        //     <div>
        //         <div>
        //             {/*{pages.map((el:number)=>{<span className={s.selectedPage}>111</span>} )}*/}
        //             {
        //                 pages.map((p: number) => {
        //                     return <span
        //                         className={this.props.currentPage === p ? s.selectedPage : s.notSelectedPage}
        //                         onClick={()=>this.onPageChanged(p)}
        //                     >{p}</span>
        //                 })
        //             }
        //         </div>
        //
        //         <h3>Users</h3>
        //         {/*{this.props.usersState.length===0 && <button onClick={this.getUsersHandler}>Get users</button>}*/}
        //         {
        //             this.props.usersState.map(el =>
        //
        //                 <div key={el.id}>
        //                     <span>
        //                         <div>
        //                             <img src={el.photos.small ? el.photos.small : defPhoto} className={s.userFoto}
        //                                  alt={"ava"}/>
        //                         </div>
        //                         <div>
        //                             {el.followed
        //                                 ? <button onClick={() => {
        //                                     this.props.unFollow(el.id)
        //                                 }}>follow</button>
        //                                 : <button onClick={() => {
        //                                     this.props.follow(el.id)
        //                                 }}>unfollow</button>
        //                             }
        //
        //                         </div>
        //                     </span>
        //                     <span>
        //                         <span>
        //                             <div>{el.name}</div>
        //                             <div>{el.status}</div>
        //                         </span>
        //                         <span>
        //                             <div>{"locathion.country"}</div>
        //                             <div>{"locathion.city"}</div>
        //                         </span>
        //                     </span>
        //                 </div>
        //             )
        //         }
        //     </div>
        //
        // )
    }

}


// const mapStateToProps = (state: any) => {
//     return {
//         usersState: state.usersFind.users,
//         pageSize: state.usersFind.pageSize,
//         totalUsersCount: state.usersFind.totalUsersCount,
//         currentPage: state.usersFind.currentPage,
//         isFetching: state.usersFind.isFetching,
//         followingInProgress:state.usersFind.followingInProgress
//     }
// }
const mapStateToProps = (state: any) => {
    return {
        usersState: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state) ,
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: userType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setToggleFetting: (value: boolean) => {
//             dispatch(toggleIsFetchingAC(value))
//         }
//     }
// }

// let AuthRedirectComponent=WithAuthRedirect(UsersAPiComponent)
//
export const UsersContainer = connect<any,any>(mapStateToProps,
    {
        followSuccess,
        unFollowSuccess,
        setCurrentPage,
        setFollowingInProgress,
        requestUsers,
        unFollow,
        follow,
    }
)(UsersAPiComponent)
