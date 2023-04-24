import {createContext, useContext, useState} from "react";


export const MessContext = createContext<any>(null)

export const MessContextProvider = ({children}: any) => {
    const [theme, setTheme] = useState<string>("light");

    const [showMess, setShowMess] = useState(false)
    let meStr = 'Hello from UseContext'

    const changeMess: any = () => {
        setShowMess(prev => prev = !prev)
    }

    return (
        <MessContext.Provider value={{
            showMess,
            changeMess,
            meStr
        }}>
            {children}
        </MessContext.Provider>
    )
}

