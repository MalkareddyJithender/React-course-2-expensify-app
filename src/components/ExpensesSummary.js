import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import currencyFormatter from 'currency-formatter';
import getVisibleExpenses from '../selecters/expenses';
import getExpensesTotal from '../selecters/expenses-total';



export class ExpensesSummary extends React.Component
{
    render()
    {
        const expenseWord = this.props.expensesCount === 1 ? 'expense' : 'expenses';
        return (
            <div className="page-header">
                <div className="content-container">
                {
                <h1 className="page-header__title">
                 viewing <span>{this.props.expensesCount}</span> {expenseWord} totalling  <span>{ currencyFormatter.format(this.props.expensesTotal/100,{code:'INR'})}</span> 
                </h1> 
                }
                <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
                </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) =>
{
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    return {
        expensesCount:visibleExpenses.length,
        expensesTotal:getExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);