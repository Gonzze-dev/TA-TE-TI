import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../custom-hooks/useLocalStorage'

const CountWinsContext = createContext()

const CountWinsProvider = ({children}) => {
    const [countWinX, setCountWinX] = useLocalStorage('countWinX', 0)
    const [countWinO, setCountWinO] = useLocalStorage('countWinO', 0)

    return (
        <CountWinsContext.Provider value={{countWinX, setCountWinX, countWinO, setCountWinO}}>
            {children}
        </CountWinsContext.Provider>
    )
}

export {CountWinsContext, CountWinsProvider}