import s from "../../Common/Paginator/Paginator.module.css";

type PropsPaginatorType={
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged:(page: number)=>void
}

export const Paginator = (props: PropsPaginatorType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: any = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {
                pages.map((p: number) => {
                    return <span
                        className={props.currentPage === p ? s.selectedPage : s.notSelectedPage}
                        onClick={() => props.onPageChanged(p)}
                    >{p}</span>
                })
            }
        </div>
    )
}
