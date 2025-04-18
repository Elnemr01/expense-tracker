import React, { useContext } from 'react'
import { Context } from '../context/GlobalState';

const Transactoin = ({trans}) => {
    let sign = trans.amount<0 ? "-" : "+";
    let state=useContext(Context);
    return (
        <li className={sign==='-' ? 'minus' : 'plus'}>
            {trans.text} <span>{sign}${Math.abs(trans.amount)}</span><button className='delete-btn'
            onClick={()=> state.deleteTransaction(trans.id)}>x</button>
        </li>
    )
}

export default Transactoin
