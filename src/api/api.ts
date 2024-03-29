import axios from "axios";
import {ReturnedDataType} from "../components/Users/UsersContainer";
import {AuthDataType} from "../redux/auth-reducer";
import { profileUpdateType} from "../redux/store";


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
    // auth(){
    //     return(
    //         instance.get(`auth/me`)
    //     )
    // },
    profile(userId:number){
        console.warn('Obsolete metod - old')
        return profileAPI.getProfile(userId)
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
export const authAPI={
    me(){
        return(
            instance.get(`auth/me`)
        )
    },
    login(data:AuthDataType){
        return (
            instance.post(`auth/login`,data)
        )
    },
    logout(){
       return  instance.delete(`auth/login`)
    }
}
export const profileAPI={
    getProfile(userId:number){
       return instance.get(`profile/${userId}`)
    },
    getStatus(userId:number){
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`/profile/status`,{status})
    },
    updatePhoto(photoFile:any){
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`/profile/photo`,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveUserData(profileData:profileUpdateType){
        return instance.put(`/profile`,profileData)
    },
}
export const securityAPI={
    getCaptchaUrl(){
       return instance.get(`security/get-captcha-url`)
    }
}


