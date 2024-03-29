import {userType} from "../../redux/users-reducer";

import axios from "axios";

import React from "react";
import {Users} from "./Users";

type UsersProps = {
    usersState: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: userType[]) => void,
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    isFetching: boolean
}
type ReturnedDataType = {
    items: userType[],
    totalCount: number,
    error: string[]
}

class UsersAPiComponent extends React.Component<any, any> {
    // constructor(props:any) {
    //     super(props)
    //     axios.get<ReturnedDataType>('https://social-network.samuraijs.com/api/1.0/users')
    //         .then((res)=>{
    //             this.props.setUsers(res.data.items)
    //         })
    // }
    componentDidMount() {
        axios.get<ReturnedDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((res) => {
                this.props.setTotalUsersCount(res.data.totalCount)
                this.props.setUsers(res.data.items)

            })
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
        axios.get<ReturnedDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        // let pages: any = []
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }
        return <Users
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            usersState={this.props.usersState}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress}
            // setFollowingInProgress={this.props.setFollowingInProgress}
            setCurrentPage={this.props.setCurrentPage}
            requestUsers={this.props.requestUsers}
        />
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

export default UsersAPiComponent
