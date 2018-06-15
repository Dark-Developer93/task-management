import { ADD_TASK, RESOLVE_TASK } from '../constants/action-types';
import taskReducer from '../reducers/tasks';

jest.mock('uuid', () => {
  return {
    v4: jest.fn(() => 1)
  };
});

describe('Task reducer', () => {
  it('should return initial state', () => {
    expect(taskReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TASK', () => {
    expect(
      taskReducer(undefined, {
        type: ADD_TASK,
        payload: {
          name: 'Do laundry'
        }
      })
    ).toEqual([{ id: 1, name: 'Do laundry', resolved: false }]);
  });

  it('should handle RESOLVE_TASK', () => {
    expect(
      taskReducer([{ id: 1, resolved: false }, { id: 2, resolved: false }], {
        type: RESOLVE_TASK,
        payload: 1
      })
    ).toEqual([{ id: 1, resolved: true }, { id: 2, resolved: false }]);
  });
});
