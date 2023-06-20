import {userType} from "../redux/users-reducer";


export const updateObjectsInArray=(items:userType[],itemId:number,objPropName:string,newObjProps: {  })=>{
    items.map((el:any) => {
        return (
            el[objPropName] === itemId ? {...el, ...newObjProps} : el
        )
    })
}
