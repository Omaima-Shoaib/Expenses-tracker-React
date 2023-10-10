import { createContext } from "react";

const initialState = {
  transactions: [
    { id: 1, text: "Omaima", amount: -20 },
    { id: 2, text: "Esraa", amount: 300 },
    { id: 3, text: "Mona", amount: -10 },
    { id: 4, text: "Alia", amount: 150 },
  ],
};
//create context
export const GlobalContext= createContext(initialState)


//create provider component and then wrap the app component with the provider   
export const GlobalProvider =()=>{}