import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abc123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('abc123', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: { note: 'New note value' }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Test expense',
    note: 'Note to test expense',
    amount: 100,
    createdAt: 5000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
