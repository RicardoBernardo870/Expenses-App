import React from 'react'
import ExpenseItem from '../ExpenseItems/ExpenseItem'
import './ExpenseBoard.css'

function ExpenseBoard(props) {
  
    return (
        <div className='expenses'>
            {props.expense.map((item) => {
      return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
    })}
        </div>
    )
}

export default ExpenseBoard
