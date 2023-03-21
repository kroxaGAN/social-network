import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, userType} from "../../redux/users-reducer";


const mapStateToProps = (state: any) => {
    return {
        usersState:state.usersFind.users
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
