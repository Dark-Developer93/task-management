import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../components/presentational/NavBar';

const wrapper = shallow(<NavBar />);

describe('NavBar component', () => {
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
