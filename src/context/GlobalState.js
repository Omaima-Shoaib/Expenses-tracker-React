import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'

const initialState = {
  transactions: [
 
  ],
};
//create context
export const GlobalContext = createContext(initialState);

//create provider component and then wrap the app component with the provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload:id
    })
  }
  function addTransaction(transaction){
    console.log(' before transaction add function')
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction
    })
    console.log('after the dispatch of add function')
    console.log(state.transactions)
  }
  return <GlobalContext.Provider value={{transactions:state.transactions,deleteTransaction,addTransaction}}>{children}</GlobalContext.Provider>;
};
