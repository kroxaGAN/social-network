import React from "react";
import {Login} from "./Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {authLogin} from "../../redux/auth-reducer";
import {AppReducerType} from "../../redux/redux-store";


class LoginContainer extends React.Component<any, any> {
    componentDidMount() {

    }

    render(){
        return <Login {...this.props}
                      authLogin={this.props.authLogin}
                      captcha={this.props.captcha}
        />
    }
}

const mapStateToProps=(state: AppReducerType)=>{
   return{
       isAuth:state.auth.isAuth,
       captcha:state.auth.captcha
   }
}

let loginContainer:any= compose(
    connect(mapStateToProps, {authLogin})
)(LoginContainer)

export default loginContainer
