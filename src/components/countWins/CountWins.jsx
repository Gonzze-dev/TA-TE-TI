import React, { useContext, useEffect, useState } from 'react'
import './CountWins.css'
import { CountWinsContext } from '../../providers/CountWinsProvider'

const CountWins = () => {
    const {countWinX, setCountWinX, countWinO, setCountWinO } = useContext(CountWinsContext)

    return (
        <div className='CountWinsContainer'>
            <div className='CountWinX'>
                {countWinX}
            </div>
            <div className='CountWinO'>
                {countWinO}
            </div>
        </div>
    )
}

export {CountWins}