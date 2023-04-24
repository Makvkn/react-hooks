import {createContext, useContext, useState} from "react";

 export const MessContext = createContext<any>({})



export const MessContextProvider: any = ({children}: any) => {

    // const [messing, setMessing] = useState<string>('false')

    <MessContext.Provider  value={children} >
    {children}
    </MessContext.Provider>




}

