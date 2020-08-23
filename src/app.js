import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense,removeExpense,editExpense } from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selecters/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({description:'Water Bill',amount:1000,createdAt:1000}));
store.dispatch(addExpense({description:'Room Bill',amount:500,createdAt:400}));
store.dispatch(addExpense({description:'Rent',amount:10000,createdAt:500}));



const state = store.getState();

console.log(getVisibleExpenses(state.expenses,state.filters));

const jsx = 
<Provider store={store}>
<AppRouter />
</Provider>

ReactDOM.render(jsx,document.getElementById('app'));
