import React, { createContext, useState } from "react";


export const LoadingContext = createContext();

export const LoadingProvider   = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);

    const dataIsLoading = (bool) => {
        setIsLoading(bool)
    }

    return (<LoadingContext.Provider value={{isLoading, dataIsLoading}}  >{children}</LoadingContext.Provider>)
}