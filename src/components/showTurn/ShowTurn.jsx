import React, { useContext, useEffect, useState } from 'react'
import './ShowTurn.css'

import { TurnContext } from '../../providers/TurnProvider'

const ShowTurn = () => {

    const {getTurnVal, turn, setTurn} = useContext(TurnContext)
    const [turnVal, setTurnTxtVal] = useState(getTurnVal())

    useEffect(() =>{
        setTurnTxtVal(getTurnVal())
    }, [turn])

    return (
        <>
        <div className='TurnContainer'>
            <h2 className='TitleTurn'>TURNO</h2>
            <div className='TurnBox'>
                <div className={turnVal == 1 ? 'Turn' : 'NoTurn'}>
                    X
                </div>
                <div className={turnVal == 0 ? 'Turn' : 'NoTurn'}>
                    O
                </div>
            </div>
        </div>
        </>
    )
}

export  {ShowTurn}