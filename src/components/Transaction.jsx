import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Transaction = ({ trans }) => {
  const sign = trans.amount < 0 ? "-" : "+";
  const {deleteTransaction}=useContext(GlobalContext)
  return (
    <li className="flex  items-center align-middle group">
     
        <span className="absolute  hidden text-white  px-1  bg-red-600 group-hover:block transition duration-300">
          <button className="bg-transparent p-0 m-0" onClick={()=>deleteTransaction(trans.id)}>x</button>
        </span>
  
      <div
        className={`bg-white w-full  shadow-sm flex justify-between px-4 border-r-4 ${
          sign === "+" ? "border-green-600" : "border-red-600"
        } new-transaction-body transition duration-300`}
      >
        <p>{trans.text}</p>
        <p>
          {sign}${Math.abs(trans.amount)}
        </p>
      </div>
    </li>
  );
};

export default Transaction;
