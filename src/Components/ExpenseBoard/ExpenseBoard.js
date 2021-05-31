import React, { useState } from 'react';
import ExpensesList from '../ExpensesList/ExpensesList';
import './ExpenseBoard.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

function ExpenseBoard(props) {
    const [filteredYear, setfilteredYear] = useState('2020')
    
    const dateHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
        
    }

    const filteredExpenses = props.expense.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
       
        
        <div className='expenses'> 
            <div className='expenses-filter'>
                <ExpensesFilter selected={filteredYear} dateFilter={dateHandler}/>
            </div>
                <ExpensesList item={filteredExpenses} />
          </div>
    
    )
}

export default ExpenseBoard
