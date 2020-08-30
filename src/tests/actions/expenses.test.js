import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,addExpense,removeExpense,editExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createStore = configureMockStore([thunk]);

test('should setup remove expense action object',() =>
{
    const action = removeExpense({ id:'123abc' });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('should setup edit expense action object', () => 
{
    const action = editExpense('1234abcd',{note:'editing an expense.'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'1234abcd',
        updates:{
            note:'editing an expense.'
        }    
    });
});

test('should setup add expense action object with provided values', () => {

    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    })
});   

test('should add expense to database and redux store',(done) =>
{
    const store = createStore({});
    const expenseData = {
        description:'mouse',
        amount:420,
        note:'This is the best mouse',
        createdAt:1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() =>
    {
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type:'ADD_EXPENSE',
           expense:{
               id:expect.any(String),
               ...expenseData
           }
       });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((dataSnapshot) =>
    {
         expect(dataSnapshot.val()).toEqual(expenseData);
         done();
    })
});

test('should add expense with defaults to database and store',() =>
{
    const store = createStore({});
    
    store.dispatch(startAddExpense()).then(() =>
    {
       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type:'ADD_EXPENSE',
           expense:{
               id:expect.any(String),
               description:'',
               amount:0,
               note:'',
               createdAt:0
           }
       });

       return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((dataSnapshot) =>
    {
         expect(dataSnapshot.val()).toEqual({
             description:'',
             amount:0,
             note:'',
             createdAt:0
         });
         done();
    })
});

// test('should setup add expense action object with default values', () => {
//     const action = addExpense();

//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             id:expect.any(String),
//             description:'',
//             amount:0,
//             createdAt:0,
//             note:''
//         }
//     })
// });