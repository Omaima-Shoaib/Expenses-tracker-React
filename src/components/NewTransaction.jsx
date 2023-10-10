import React, { useState } from "react";
import "./style.css";
const NewTransaction = () => {
  const [text,setText]=useState('');
  const [amount,setAmount]=useState("0")
  return (
    <>
      <div className="new-transaction ">
        <p className="font-medium border-b border-slate-400 h3">
          {" "}
          Add new transaction
        </p>
        <form action="">
          <div className="new-transaction-body">
            <p>Text</p>
            <input
              type="text"
              value={text}
              onChange={e=>setText(e.target.value)}
              placeholder="Enter text..."
              className="w-full border border-slate-200 px-1"
            />
            <p>Amount</p>
            <p className="text-sm">(negative-expense,positive-income)</p>
            <input
              type="text"
              placeholder="Enter amount..."
              value={amount}
              onChange={e=>setAmount(e.target.value)}
              className="w-full border border-slate-200 px-1"
            />
          </div>
          <button>Add transaction</button>
        </form>
      </div>
    </>
  );
};

export default NewTransaction;
