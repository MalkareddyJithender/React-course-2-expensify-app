import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashboardExpensePage = () =>  (
    <div>
       <ExpenseListFilters />
       <ExpenseList />
    </div>
);


export default DashboardExpensePage;