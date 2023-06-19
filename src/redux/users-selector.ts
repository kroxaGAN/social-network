import {AppReducerType} from "./redux-store";

// NOT WORK
// const getUsersSelector = (state: AppReducerType) => {
//     return state.usersFind.users
// }
// export const getUsers = createSelector<any, any>(getUsersSelector,
//     (...users:any)=>users.filter(true)
// )

export const getUsers = (state: AppReducerType) => {
    return state.usersFind.users
}

export const getPageSize = (state: AppReducerType) => {
    return state.usersFind.pageSize
}
export const getTotalUsersCount = (state: AppReducerType) => {
    return state.usersFind.totalUsersCount
}
export const getCurrentPage = (state: AppReducerType) => {
    return state.usersFind.currentPage
}
export const getIsFetching = (state: AppReducerType) => {
    return state.usersFind.isFetching
}
export const getFollowingInProgress = (state: AppReducerType) => {
    return state.usersFind.followingInProgress
}
