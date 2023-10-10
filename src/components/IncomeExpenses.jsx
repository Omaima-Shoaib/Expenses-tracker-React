import React, { useContext } from "react";
import "./style.css";
import { GlobalContext } from "../context/GlobalState";
const IncomeExpenses = () => {
  const { transactions }=useContext(GlobalContext)
  const amounts=transactions.map(transaction=>transaction.amount)
  const income=amounts.filter(item=>item>0).reduce((acc,item)=>acc+=item,0).toFixed(2)
  const expense=amounts.filter(item=>item<0).reduce((acc,item)=>acc+=item,0).toFixed(2)
  return (
    <div className="inc-exp-container justify-center"> 
      <div className="plus-container border-r ">
        <h4  className="font-semibold lg:text-base text-xs text-slate-800">INCOME</h4>
        <p  className="text-green-600">${income}</p>
      </div>
      <div className="plus-container  "> 
        <h4 className="font-semibold lg:text-base  text-xs text-slate-800">EXPENSE</h4>
        <p  className="text-red-600">${Math.abs(expense)}</p>
      </div>
    </div>
  );
};
export default IncomeExpenses;
