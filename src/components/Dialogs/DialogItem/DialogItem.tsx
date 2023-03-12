import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType={
    name:string,
    id:number,
    avatar:string
}


export const DialogItem = (props:DialogPropsType) => {
    let path=`/dialogs/${props.id}`
    return <div className={`${s.dialog}`}>
        <NavLink to={path} activeClassName={s.active}>
            {<img className={s.dialog} src={props.avatar} alt="ava"/>}
            {props.name}
        </NavLink>
        </div>

}
