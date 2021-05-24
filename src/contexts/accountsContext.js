import {createContext, useReducer} from "react"
import accountsReducer from "../reducers/accountsReducer";

//initial state
const initialState ={
    transactions:[]
}

export const AccountsContext= createContext(initialState);

export const AccountsContextProvider =({children})=>{
    const [state, dispatch]= useReducer(accountsReducer, initialState);

    //actions
    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload: transaction
        });
    }


    return (
        <AccountsContext.Provider value={{transactions:state.transactions, deleteTransaction, addTransaction}}>
      {children}
        </AccountsContext.Provider>
    )
}
export default AccountsContextProvider;