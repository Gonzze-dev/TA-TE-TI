import React, { useContext } from 'react'
import './ResetCounters.css'

import { CountWinsContext } from '../../providers/CountWinsProvider'

const ResetCounters = ()  => {
    const {countWinX, setCountWinX, countWinO, setCountWinO }= useContext(CountWinsContext)

    const resetCounters = () => {
        setCountWinX(0)
        setCountWinO(0)
    }

    return (
        <button className='ResetCounters' onClick={resetCounters}>
            Reiniciar contadores
        </button>
    )
}

export {ResetCounters}