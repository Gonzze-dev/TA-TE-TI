import React, { useEffect, useState } from 'react'

import { useContext } from 'react'

import './square.css'
import { TableContext } from '../../providers/TableProvider'
import { TurnContext } from '../../providers/TurnProvider'


const Cuadrado = ({id}) => {
  const {tableValues, setTableValues} = useContext(TableContext)
  const {getTurnVal, turn, setTurn} = useContext(TurnContext)

  const [isDisable, setIsDisable] = useState(false)
  const [classNameButton, setcClassNameButton] = useState('square')
  
  const [letterVal, setLetterVal] = useState(null)

  useEffect(() => {
    const isTouch = tableValues[id] == -1 ? false : true;

    if(isTouch)
    {
      setcClassNameButton('square-disable')
    }
    else
    {
      setcClassNameButton('square')
      setLetterVal('')
    }
    setIsDisable(isTouch)
  }, [tableValues])

  const handlerIsClicked = () => {
    const turnVal = getTurnVal()
    let letter = 'X'
    const tableValuesMap = tableValues.map((item, index) => index === id ? turnVal : item)

    if(turnVal == 0){
      letter =  'O'
    }

    setTableValues(tableValuesMap)
    setTurn(!turn)
    setcClassNameButton('square-disable')
    setLetterVal(letter)
  }

  return (
    <button key={id} className={classNameButton} onClick={handlerIsClicked} disabled={isDisable}>
      <div className='letter'>
        {letterVal}
      </div>
    </button>
  )
}

export  {Cuadrado}