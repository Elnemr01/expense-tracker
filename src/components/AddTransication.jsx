import React, {useContext, useEffect, useState } from 'react'
import { Context } from '../context/globalState';
import {v4 as uuidv4} from 'uuid';

const AddTransication = () => {
    let [text,setText]=useState('');
    let [amount,setAmount]=useState("");
    let state=useContext(Context);


    function handleAdd () {
        if(amount!="" && text!="") {
            state.addTransaction({
                    id: uuidv4(),
                    text:text,
                    amount: +amount
                })
                setAmount("");
                setText("");
        }
    }


    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={(ev)=> ev.preventDefault()}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input id='text' required type="text"
                    value={text} placeholder="Enter text..." onChange={(ev)=> setText(ev.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label>
                    <input type="number" required id='amount' placeholder="Enter amount..."
                    value={amount} onChange={(ev)=> setAmount(ev.target.value)}/>
                </div>
                <button className="btn" onClick={()=>handleAdd()}>Add transaction</button>
            </form>
        </>
    )
}

export default AddTransication
