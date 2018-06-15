import { ADD_TASK, RESOLVE_TASK } from '../constants/action-types';
import { addTask, resolveTask } from '../actions/tasks';

describe('Task actions', () => {
  it('should add task', () => {
    const task = {
      name: 'Do laundry'
    };
    const expectedAction = {
      type: ADD_TASK,
      payload: task
    };

    expect(addTask(task)).toEqual(expectedAction);
  });

  it('should resolve task', () => {
    const taskId = 'T-123';
    const expectedAction = {
      type: RESOLVE_TASK,
      payload: taskId
    };

    expect(resolveTask(taskId)).toEqual(expectedAction);
  });
});
