import React from 'react'
import {useContext} from "react"
import {AccountsContext }from "../contexts/accountsContext";

function Balance() {
    const {transactions} =useContext(AccountsContext);

    const amounts = transactions.map(transaction => transaction.amount);

   const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return (
        <>
            <h4>Balance</h4>
            <h2>${total}</h2>
        </>
    )
}

export default Balance