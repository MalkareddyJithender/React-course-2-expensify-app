import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let history,editExpense,startRemoveExpense,wrapper;

beforeEach(() =>
{
    startRemoveExpense = jest.fn();
     history ={
        push:jest.fn()
    };
     editExpense = jest.fn();
     wrapper = shallow(<EditExpensePage 
        expense={expenses[1]} 
        editExpense={editExpense} 
        startRemoveExpense={startRemoveExpense}
        history={history} 
        />);
});

test('should render EditExpensePage correctly',() =>
{
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense',() =>
{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
});

test('should handle removeExpense',() =>
{
    wrapper.find('button').simulate('click',{
        preventDefault:() => {}
    });
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({
        id:expenses[1].id
    });
});

