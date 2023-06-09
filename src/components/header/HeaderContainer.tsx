import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppReducerType} from "../../redux/redux-store";

 class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`,{withCredentials:true})
            .then((res)=>{
                if(res.data.resultCode===0){
                    let {id, login, email}=res.data.data
                    this.props.setAuthUserDataAC(id, login, email)
                }
            })
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

export default connect(mapStateToProps,{setAuthUserDataAC})(HeaderContainer)
