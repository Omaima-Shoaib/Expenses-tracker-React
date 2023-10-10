import React from 'react'
import './style.css'
const History = () => {
  return (
    <div className='new-transaction'>
      <p className='h3'>History</p>
      <div className={`bg-white shadow-sm flex justify-between px-2 border-r-4 border-green-600 new-transaction-body`}>
          <p>Cash</p>
          <p>+500</p>
           
      </div>
    </div>
  )
}

export default History
