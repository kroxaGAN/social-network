import axios from "axios";
import {ReturnedDataType} from "../components/Users/UsersContainer";


const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{"API-KEY":"26fb8af1-3e7d-4c3b-ab20-99c24ecae36c"}
})

export const userAPI={
    getUsers(pageSize:number=10,currentPage:number=1){
        return (
            instance.get<ReturnedDataType>(`users?count=${pageSize}&page=${currentPage}`)
                .then(response=>response.data)
        )
    },
    auth(){
        return(
            instance.get(`auth/me`)
        )
    },
    profile(userId:number){
        return(
            instance.get(`profile/${userId}`)
        )
    },
    unfollow(userId:number){
        return(
            instance.delete(`follow/${userId}`)
                .then(res=>res.data)
        )
    },
    follow(userId:number){
        return(
            instance.post(`follow/${userId}`)
                .then(res=>res.data)
        )
    },
}


