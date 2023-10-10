import React, { useContext } from 'react'
import './style.css'
import { GlobalContext } from '../context/GlobalState'
const Balance = () => {
  const {transactions}=useContext(GlobalContext)
  const amounts=transactions.map(transaction=>transaction.amount)
  console.log(amounts)
  const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
  return (
    <div className='balance'>
      <h4 className='h3'>Your Balance:</h4>
      <div className='new-transaction-body'>
      <h1  className='text-2xl font-semibold text-slate-800'>${total}</h1>
      </div>
    </div>
  )
}

export default Balance
