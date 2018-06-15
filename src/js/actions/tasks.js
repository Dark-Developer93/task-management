import { ADD_TASK, RESOLVE_TASK } from '../constants/action-types';

export const addTask = task => ({
  type: ADD_TASK,
  payload: task
});

export const resolveTask = taskId => ({
  type: RESOLVE_TASK,
  payload: taskId
});
