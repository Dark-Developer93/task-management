import React from 'react';
import { shallow } from 'enzyme';

import MainLayout from '../components/layout/MainLayout';

const wrapper = shallow(<MainLayout />);

describe('Main layout component', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
