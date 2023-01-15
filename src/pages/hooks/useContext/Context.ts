import {createContext, useContext, useState} from "react";


const MessContext = createContext(null)

export const MessContextProvider = ({children}) => {
    const [mess, setMess] = useState(false)

    <MessContext.Provider value = {{mess}}>
    {children}
    </MessContext.Provider>

}

