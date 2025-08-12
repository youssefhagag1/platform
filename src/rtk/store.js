// store.js
import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './Slices/courses';

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});