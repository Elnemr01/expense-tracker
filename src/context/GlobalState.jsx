import React, { createContext, useReducer } from "react";
import appReducer from "./appReducer";

let intialState={
    transaction:[]
};

export let Context=createContext();

export let ConProvider =({children}) => {
    let [state ,dispatch]=useReducer(appReducer,intialState);

    function addTransaction (transaction) {
        dispatch({
            type : "ADD_TRANSACTION",
            payload : transaction
        })
    }

    function deleteTransaction (id) {
        dispatch({
            type : "DELETE_TRANSACTION",
            payload : id
        })
    }


    return (
        <Context.Provider value={{
            transaction :state.transaction,
            addTransaction,
            deleteTransaction
        }}>
        {children}
        </Context.Provider>
    )
}


