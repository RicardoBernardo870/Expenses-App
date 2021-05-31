import React, { useState } from 'react'
import ExpenseItem from '../ExpenseItems/ExpenseItem'
import './ExpenseBoard.css'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

function ExpenseBoard(props) {
    const [filteredYear, setfilteredYear] = useState('2020')
    
    const dateHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
        
    }

    const filteredExpenses = props.expense.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((item) => {
                return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            })
    }
  
    return (
       
        
        <div className='expenses'> 
            <div className='expenses-filter'>
                <ExpensesFilter selected={filteredYear} dateFilter={dateHandler}/>
            </div>
                {expensesContent}
          </div>
    
    )
}

export default ExpenseBoard
