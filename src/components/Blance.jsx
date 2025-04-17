import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/globalState'


const Blance = () => {
    let state =useContext(Context);
    let [total,setTotal]=useState(0.00);
    let [amounts,setAmounts]=useState(0.00);

    useEffect(()=> {
        amounts=state.transaction.map((e)=> e.amount);
        setTotal(amounts.reduce((acc,e)=> acc+=e,0).toFixed(2));
    })

    return (
        <>
            <h4>your blance</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Blance
