import React from 'react';
import getVisibleExpenses from '../selecters/expenses';
import getExpensesTotal from '../selecters/expenses-total';
import {connect} from 'react-redux';
import currencyFormatter from 'currency-formatter';


export class ExpensesSummary extends React.Component
{
    render()
    {
        const expenseWord = this.props.expensesCount === 1 ? 'expense' : 'expenses';
        return (
            <div>
                {
                <h4> viewing {this.props.expensesCount} {expenseWord} totalling 
                { currencyFormatter.format(this.props.expensesTotal/100,{code:'INR'})} 
                </h4> 
                }
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