import React from "react";
import {Header} from "./Header";
import {getAuthUserData, logOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppReducerType} from "../../redux/redux-store";

 class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        this.props.getAuth()
        // axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`,{withCredentials:true})
        // userAPI.auth()
        // .then((res)=>{
        //         if(res.data.resultCode===0){
        //             let {id, login, email}=res.data.data
        //             this.props.setAuthUserDataAC(id, login, email)
        //         }
        //     })
    }

    render(){
        return <Header {...this.props}/>
    }

}
let mapStateToProps=(state:AppReducerType)=>{
     return {
         isAuth:state.auth.isAuth,
         login:state.auth.login
     }
 }

export default connect(mapStateToProps,{getAuth: getAuthUserData, logOut})(HeaderContainer)
