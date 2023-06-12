import {Redirect} from "react-router-dom";
import React from "react";
import {AppReducerType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: AppReducerType) => {
    return {
        isAuth:state.auth.isAuth
    }
}

export const WithAuthRedirect=(Component:any)=>{
    class RedirectComponent extends React.Component<any, any>{
        render(){
            if (!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props}/>
        }
    }

    let AuthRedirectComponent=connect(mapStateToPropsForRedirect,{})(RedirectComponent)


    return AuthRedirectComponent
}
