import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC, userType} from "../../redux/users-reducer";
import Users from "./Users";


const mapStateToProps = (state: any) => {
    return {
        usersState:state.usersFind.users,
        pageSize:state.usersFind.pageSize,
        totalUsersCount:state.usersFind.totalUsersCount
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },
        unFollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },
        setUsers:(users:userType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
