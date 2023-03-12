import s from "./Friend.module.css"

type FriendPropsType={
    name:string,
    avatar:string
}

export const Friend=(props:FriendPropsType)=>{
    return(
        <div className={s.friendWrapper}>
        <div >
            {<img className={s.imgAva} src={props.avatar} alt="ava"/>}
        </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}
