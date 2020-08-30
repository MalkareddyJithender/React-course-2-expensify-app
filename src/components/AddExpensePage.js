import React from 'react';
import {connect} from 'react-redux';
import {startAddExpense,addExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

//to avoid inline functions we are creating class based component

export class AddExpensePage extends React.Component
{
    onSubmit = (expense) => 
    {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
    };

    render()
    {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                onSubmit={this.onSubmit}
                />
            </div>
        );
    };
}


const mapDispatchToProps = (dispatch) =>({ startAddExpense:(expense) => dispatch(startAddExpense(expense))});

export default connect(undefined,mapDispatchToProps)(AddExpensePage);