import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

export const Header = (props: any) => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMgRs5gr5GW8nZkyBPcIW-LHLgIaXkf6uOA&usqp=CAU'
             alt="Logo"/>
        <div className={s.loginBlock}>

            {props.isAuth
                ? (<>
                    <div>{props.login}</div>
                    <button onClick={() => {
                        props.logOut()
                    }}>Logout
                    </button>
                </>)
                // ? <button onClick={()=>{props.logOut()}}>{props.login}   Logout</button>
                : <NavLink to={"/login"}>
                    Login
                </NavLink>
            }

        </div>
    </header>
}
