import React, { useContext, useEffect, useState } from 'react'
import './table.css'

import {Square} from '../square/Square'
import { TableContext } from '../../providers/TableProvider'
import {PopUpWinner} from '../popUpWinner/PopUpWinner';
import { ShowTurn } from '../showTurn/ShowTurn';
import { CountWins } from '../countWins/CountWins';
import { HaveWinnerContext } from '../../providers/HaveWinnerProvider';
import { CountWinsContext } from '../../providers/CountWinsProvider';
import { ResetCounters } from '../resetCounters/ResetCounters';

const checkWinner = (table) => {
    const winCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ] // posibles combinaciones en las que puede haber un tres en ralla

    let winnerVal = -1 //No hay ganador
    const empate = table.every(val => val != -1)

    if (empate) return 2

    for (const combination of winCombinations)
    {
      const [a, b, c] = combination

      if((table[a] == table[b] && table[a] == table[c]) 
        && ((table[a] != -1 && table[b] != -1) && table[c] != -1))
      {
        winnerVal = table[a]
        break
      }
    }

    return winnerVal
}

const Table = () => {
  const {tableValues, setTableValues} = useContext(TableContext)
  const {haveWinner, setHaveWinner, winner, setWinner} = useContext(HaveWinnerContext)
  const {countWinX, setCountWinX, countWinO, setCountWinO }= useContext(CountWinsContext)

  useEffect(() =>{
      let winnerVal = checkWinner(tableValues)

      if (winnerVal == 1 || winnerVal == 0)
      {
        winnerVal == 1 ? setWinner('X') : setWinner('O')
        winnerVal == 1 ? setCountWinX(countWinX+1) : setCountWinO(countWinO+1)

        setHaveWinner('si')
      }else if (winnerVal == 2)
      {
        setHaveWinner('empate')
      }
  }, [tableValues])

  
  return (
    <div className='table-container'>
      <h1 className='TitleGame'>TA-TE-TI</h1>
      <div className='table'>
        <Square id={0}/>
        <Square id={1}/>
        <Square id={2}/>
        <Square id={3}/>
        <Square id={4}/>
        <Square id={5}/>
        <Square id={6}/>
        <Square id={7}/>
        <Square id={8}/>
      </div>

      <CountWins/>
      <ShowTurn/>
      <PopUpWinner/>

      <ResetCounters/>
    </div>
  )
}

export {Table}