import React from "react";

const defaultValue: any = {}


export const StoreContext = React.createContext(defaultValue)

// export const Provider = (props: any) => {
//     return <StoreContext.Provider value = {props.store} >
//         {props.children}
//         < /StoreContext.Provider>
// }
