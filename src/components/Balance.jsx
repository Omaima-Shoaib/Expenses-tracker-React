import React from 'react'
import './style.css'
const Balance = () => {
  return (
    <div className='balance'>
      <h4 className='h3'>Your Balance:</h4>
      <div className='new-transaction-body'>
      <h1  className='text-2xl font-semibold text-slate-800'>$0.00</h1>
      </div>
    </div>
  )
}

export default Balance
