import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/globalState'
import Transactoin from './Transactoin';

const TransizationList = () => {
    let state=useContext(Context);
    return (
        <>
            <h3>history</h3>
            <ul className='list'>
                {
                    state.transaction.map((e,i)=> <Transactoin key={i} trans={e}/> )
                }
            </ul>
        </>
    )
}

export default TransizationList
