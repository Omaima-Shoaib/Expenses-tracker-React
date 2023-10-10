import React from "react";
import "./style.css";
const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container"> 
      <div className="plus-container border-r ">
        <h4  className="font-semibold text-lg text-slate-800">INCOME</h4>
        <p  className="text-green-600">+$0.00</p>
      </div>
      <div className="plus-container"> 
        <h4 className="font-semibold text-lg text-slate-800">EXPENSE</h4>
        <p  className="text-red-600">-$0.00</p>
      </div>
    </div>
  );
};
export default IncomeExpenses;
