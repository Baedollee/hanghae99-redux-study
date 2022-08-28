import { configureStore } from '@reduxjs/toolkit';
import posts from '../modules/postsSlice';
import counter from '../modules/counterSlice';
import todos from '../modules/todoSlice';

const store = configureStore({
  reducer: { posts, counter, todos },
});

export default store;
