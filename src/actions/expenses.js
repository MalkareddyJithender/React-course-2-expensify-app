import { v4 as uuidv4  } from 'uuid';
import database from '../firebase/firebase';
import expenses from '../tests/fixtures/expenses';

    //component calls action generator
    //action generator returns an object
    //component dispatch object
    //redux store changes

    //component calls action generator
    //action generator returns function
    //component dispatches function
    //function runs(has ability to dispatch other actions and do whatever it wants)

//ADD_EXPENSE

export const addExpense = (expense) => ({
type:'ADD_EXPENSE',
expense
});

//startAddExpense 
export const startAddExpense = (expenseData = {}) =>
{
    return (dispatch,getState) =>
    {
        const uid = getState().auth.uid;
        const 
        {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense ={description,note,amount,createdAt};
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) =>
        {
            dispatch(addExpense({
            id:ref.key,
            ...expense
            }));
        });
    };
};

//REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
type:'REMOVE_EXPENSE',
id
});

//startRemoveExpense
export const startRemoveExpense = ({id}) =>
{
    return (dispatch,getState) =>
    {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/expenses/${id}`).remove()
        .then(() =>
        {
            dispatch(removeExpense({id}));
        }).catch((e) =>
        {
            console.log('Expense removal Failed!',e);
        });
    };
};

//EDIT_EXPENSE
export const editExpense = (id,updates) => ({
type:'EDIT_EXPENSE',
id,
updates
});

//startEditExpense
export const startEditExpense = (id,updates) =>
{
    return (dispatch,getState) =>
    {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() =>
        {
            dispatch(editExpense(id,updates));
        }).catch((e) =>
        {
            console.log('expense updation failed!',e);
        });
    };
};

//SET_EXPENSES

export const setExpenses = (expenses) =>({
    type:'SET_EXPENSES',
    expenses
});

//startSetExpenses
export const startSetExpenses = () =>
{
    return (dispatch,getState) =>
    {
        const uid = getState().auth.uid;

      return database.ref(`users/${uid}/expenses`).once('value').then((dataSnapshot) =>
        {
            const expenses = [];
            dataSnapshot.forEach((childDataSnapshot) =>
            {
                expenses.push({
                    id:childDataSnapshot.key,
                    ...childDataSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};