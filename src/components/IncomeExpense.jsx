import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/GlobalState';

const IncomeExpense = () => {

    let state =useContext(Context);
    let [income,setIncome]=useState(0.00);
    let [expence,setExpence]=useState(0.00);
    let [amounts,setAmounts]=useState([]);
    
    
    useEffect(()=> {
        amounts=state.transaction.map((e)=> e.amount);
        setExpence(amounts.filter((e)=> e<0).reduce((acc,e)=> acc+=e,0));
        setIncome(amounts.filter((e)=> e>0).reduce((acc,e)=> acc+=e,0).toFixed(2));
    })


    return (
        <div className='inc-exp-container'>
            {/* income */}
            <div>
                <h4>income</h4>
                <p className='money plus'>+${income}</p>
            </div>
            {/* {outcome} */}
            <div>
                <h4>expense</h4>
                <p className='money minus'>-${Math.abs(expence).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
