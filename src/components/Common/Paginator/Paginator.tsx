import s from "../../Common/Paginator/Paginator.module.css";
import { useState} from "react";

type PropsPaginatorType={
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged:(page: number)=>void,
    portionSize:number,
    setCurrentPage:(page: number)=>void
    requestUsers:(pageSize:number,currentPage:number)=>void
}

export const Paginator = (props: PropsPaginatorType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages: any = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount=Math.ceil(pagesCount/props.portionSize)
    let [portionNumber,setPortionNumber]=useState(1)
    let leftPortionPageNumber=(portionNumber-1)*props.portionSize+1
    let rightPortionPageNumber=portionNumber*props.portionSize


    const nextPortionHandler=()=>{
        setPortionNumber(portionNumber+1)
    }
    //can not made update current page for new portion
    // useEffect(()=>{
    //     props.requestUsers(props.pageSize,(portionNumber*props.portionSize)+1)
    //     props.setCurrentPage(portionNumber*props.portionSize+1)
    //     props.onPageChanged(portionNumber*props.portionSize+1)
    // },[])
    return (
        <div>
            {leftPortionPageNumber>1 && <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
            {
                pages
                    .filter((p:number)=> p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map((p: number) => {
                    return <span
                        className={props.currentPage === p ? s.selectedPage : s.notSelectedPage}
                        onClick={() => props.onPageChanged(p)}
                    >{p}</span>
                })
            }
            {portionCount>portionNumber && <button onClick={nextPortionHandler }>NEXT</button>}
        </div>
    )
}
