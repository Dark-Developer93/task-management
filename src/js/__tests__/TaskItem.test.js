import React from 'react';
import { mount } from 'enzyme';

import { TaskItem } from '../components/TaskItem';
import { addDays } from '../util/DateUtil';

const now = new Date('2018-01-01').getTime();
Date.now = jest.fn().mockReturnValue(now);

const setup = customProps => {
  const props = {
    id: '1',
    name: 'some task',
    category: 'a category',
    description: 'lorem ipsum',
    createdDate: Date.now(),
    reminderDate: Date.now(),
    dueDate: addDays(Date.now(), 4),
    resolved: false,
    dispatch: jest.fn(),
    ...customProps
  };

  const wrapper = mount(<TaskItem {...props} />);

  return {
    props,
    wrapper
  };
};

describe('TaskItem component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render correctly', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render card with border-warning when task is almost due', () => {
    const { wrapper } = setup({ dueDate: addDays(Date.now(), 3) });
    expect(wrapper.find('.card.border-warning')).toHaveLength(1);
  });

  it('should render card with border-danger when task is over due', () => {
    const { wrapper } = setup({ dueDate: addDays(Date.now(), -1) });
    expect(wrapper.find('.card.border-danger')).toHaveLength(1);
  });

  it('should render card with border-success when task is resolved', () => {
    const { wrapper } = setup({ resolved: true });
    expect(wrapper.find('.card.border-success')).toHaveLength(1);
  });

  // it('should disable add task button when mandatory fields are empty', () => {
  //   const { wrapper } = setup();
  //   expect(wrapper.find('button').props().disabled).toBeTruthy();
  // });

  // it('shoud call addTask when form is submitted', () => {
  //   const { wrapper, props } = setup();
  //   expect(props.toggleTask.mock.calls).toHaveLength(0);
  //   wrapper.find('button').simulate('submit');
  //   expect(props.toggleTask.mock.calls).toHaveLength(1);
  //   wrapper.find('form').simulate('submit');
  //   expect(props.toggleTask.mock.calls).toHaveLength(2);
  // });
});
