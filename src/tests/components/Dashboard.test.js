import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/Dashboard';

test('should render Dashboard correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
