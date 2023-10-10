import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="new-transaction">
      <p className="h3">History</p>
      <ul>
      {transactions.map((trans) => {
        return (
          // <div
          //   className={`bg-white shadow-sm flex justify-between px-2 border-r-4 border-green-600 new-transaction-body`}>
          //   <p>{trans.text}</p>
          //   <p>{trans.amount}</p>
          // </div>
          <Transaction key={trans.id} trans={trans}></Transaction>
        );
      })}
      </ul>
    </div>
  );
};

export default TransactionList;
