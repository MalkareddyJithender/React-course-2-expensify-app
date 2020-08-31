import React from 'react';
import {connect} from 'react-redux';
import { editExpense,startRemoveExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

// To Avoid inline Functions we have to create class based components

export class EditExpensePage extends React.Component
{
    onSubmit= (expense) =>
    {
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
        console.log('updated',expense);
    };
    onRemove = (e) =>
    {
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.props.history.push('/');
    };

    render()
    {
        return (
            <div>
              <ExpenseForm 
              expense={this.props.expense}
              onSubmit={this.onSubmit}
              />
            <button 
            onClick={this.onRemove}
            >
            Remove
            </button>
            </div>
        );
    }
};

//es6 --short-hand-syntax

const mapStateToProps = (state,props) => ({   expense:state.expenses.find((expense) => expense.id === props.match.params.id) });

const mapDispatchToProps = (dispatch) => ({
     editExpense:(id,expense) => dispatch(editExpense(id,expense)),
     startRemoveExpense:(data) => dispatch(startRemoveExpense(data))
    });

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);