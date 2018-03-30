import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/Edit';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, match;

beforeEach(() => {
  match = {
    params: {
      id: '3'
    }
  };
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      match={match}
    />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(editExpense).toHaveBeenLastCalledWith('3', expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle onClick', () => {
  wrapper.find('button').prop('onClick')();
  expect(removeExpense).toHaveBeenLastCalledWith({ id: '3' });
  expect(history.push).toHaveBeenLastCalledWith('/');
});
