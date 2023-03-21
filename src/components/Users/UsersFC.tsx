import {userType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import defPhoto from "../../Isses/Images/defPhoto.png"

type UsersProps = {
    usersState: userType[],
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: userType[]) => void
}
type ReturnedDataType={
    items:userType[],
    totalCount:number,
    error:string[]
}


export const Users = (props: UsersProps) => {
    // console.log(props.usersState)
    // const initialUsers=[
    //     {id: 1, avatarUrl:'https://cdnn21.img.ria.ru/images/07e4/03/02/1566633996_0:266:1080:1076_1920x0_80_0_0_c60985b45734985e191faa1d42cf7faa.jpg', followed: false, fullName: 'Dima', status: 'Boss', locathion: {city: 'Minsk', country: 'Belarus'}},
    //     {id: 2, avatarUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kaikov_Andrey.jpg/640px-Kaikov_Andrey.jpg', followed: true, fullName: 'Andrei', status: 'worker', locathion: {city: 'Stolb', country: 'Belarus'}},
    //     {
    //         id: 3,
    //         avatarUrl:'https://www.kino-teatr.ru/acter/photo/3/5/7453/649586.jpg',
    //         followed: false,
    //         fullName: 'Diana',
    //         status: 'superBoss',
    //         locathion: {city: 'Vilnius', country: 'Litva'}
    //     },
    // ]
    const getUsersHandler=()=>{
        if(props.usersState.length===0){

            axios.get<ReturnedDataType>('https://social-network.samuraijs.com/api/1.0/users')
                .then((res)=>{
                    props.setUsers(res.data.items)
                })

        }
    }


    return (
        <div>
            <h3>Users</h3>
            {props.usersState.length===0 && <button onClick={getUsersHandler}>Get users</button>}
            {
                     props.usersState.map(el =>

                        <div key={el.id}>
                            <span>
                                <div>
                                    <img src={el.photos.small ? el.photos.small : defPhoto } className={s.userFoto} alt={"ava"}/>
                                </div>
                                <div>
                                    {el.followed
                                        ? <button onClick={() => {
                                            props.unFollow(el.id)
                                        }}>follow</button>
                                        : <button onClick={() => {
                                            props.follow(el.id)
                                        }}>unfollow</button>
                                    }

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{el.name}</div>
                                    <div>{el.status}</div>
                                </span>
                                <span>
                                    <div>{"locathion.country"}</div>
                                    <div>{"locathion.city"}</div>
                                </span>
                            </span>
                        </div>
                    )
            }
        </div>

    )
}
