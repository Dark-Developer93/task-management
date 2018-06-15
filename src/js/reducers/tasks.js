import { v4 as uuid } from 'uuid';

import { ADD_TASK, RESOLVE_TASK } from '../constants/action-types';

const createTask = task => {
  return {
    id: uuid(),
    name: task.name,
    description: task.description,
    reminderDate: task.reminderDate,
    dueDate: task.dueDate,
    resolved: false
  };
};

const resolveTask = (task, taskId) => {
  if (task.id === taskId) {
    return {
      ...task,
      resolved: true
    };
  }
  return task;
};

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, createTask(action.payload)];
    case RESOLVE_TASK:
      return state.map(task => resolveTask(task, action.payload));
    default:
      return state;
  }
};

export default taskReducer;
