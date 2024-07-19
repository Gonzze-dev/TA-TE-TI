import React, { createContext, useState } from 'react'

const TurnContext = createContext()

const TurnProvider = ({ children }) => {

    const [turn, setTurn] = useState(true)

    const getTurnVal = () => turn ? 1 : 0

    return (
      <TurnContext.Provider value={{getTurnVal, turn, setTurn}}>
        {children}
      </TurnContext.Provider>
    )
}

export {TurnContext, TurnProvider}