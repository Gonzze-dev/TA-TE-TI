// src/context/MyContext.js
import React, { createContext, useState } from 'react';

const HaveWinnerContext = createContext();

const HaveWinnerProvider = ({ children }) => {
    const [haveWinner, setHaveWinner] = useState('no');
    const [winner, setWinner] = useState('')
    return (
        <HaveWinnerContext.Provider value={{ haveWinner, setHaveWinner, winner, setWinner}}>
            {children}
        </HaveWinnerContext.Provider>
    );
};

export { HaveWinnerContext, HaveWinnerProvider };