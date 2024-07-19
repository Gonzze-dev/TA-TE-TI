import React, { useContext, useEffect, useState } from 'react'
import './PopUpWinner.css'
import { TableContext } from '../../providers/TableProvider'
import { HaveWinnerContext } from '../../providers/HaveWinnerProvider'

const PopUpWinner = () => {
    const {tableValues, setTableValues} = useContext(TableContext)
    const {haveWinner, setHaveWinner, winner, setWinner} = useContext(HaveWinnerContext)


    const resetGame = () =>
    {
        setHaveWinner(false)
        setHaveWinner('no')
        setTableValues(tableValues.map(() => -1))
    }

    return (
    <>
        {(haveWinner == 'si' || haveWinner == 'empate') &&
        <div className='PopUpWinnerContainer'>
            <div className='PopUpWinner'>
            {haveWinner == 'si' ?
                <h2 className='winnerTitleContainer'>TA-TE-TI DE <span className='winner'>{winner}</span></h2>
                :
                <h2>Empate</h2>
            }
                <button className='close-PopUpWinner' onClick={resetGame}>
                    Reiniciar
                </button>

            </div>
        </div>}
    </>
  )
}

export  {PopUpWinner}