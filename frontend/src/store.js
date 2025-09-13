import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './slices/projectsSlice';
import boardsReducer from './slices/boardsSlice';
import tasksReducer from './slices/tasksSlice';
import commentsReducer from './slices/commentsSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    boards: boardsReducer,
    tasks: tasksReducer,
    comments: commentsReducer,
  },
});

export default store;
