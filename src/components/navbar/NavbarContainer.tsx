import React from "react";
import {connect} from "react-redux";
import {Navbar} from "./Navbar";

const mapStateToProps=(state:any)=>{
    return {
        friends:state.sideBar.friends,
    }
}
const mapDispatchToProps=(dispatch:any)=>{
    return {

    }
}

export const NavbarContainer =connect(mapStateToProps,mapDispatchToProps)(Navbar)
