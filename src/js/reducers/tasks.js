import { v4 as uuid } from 'uuid';

import { ADD_TASK, TOGGLE_TASK } from '../constants/action-types';

const createTask = task => {
  return {
    id: uuid(),
    category: task.category,
    name: task.name,
    description: task.description,
    createdDate: Date.now(),
    reminderDate: task.reminderDate,
    dueDate: task.dueDate,
    resolved: false
  };
};

const toggleTask = (task, taskId) => {
  if (task.id === taskId) {
    return {
      ...task,
      resolved: !task.resolved
    };
  }
  return task;
};

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, createTask(action.payload)];
    case TOGGLE_TASK:
      return state.map(task => toggleTask(task, action.payload));
    default:
      return state;
  }
};

export default tasks;
