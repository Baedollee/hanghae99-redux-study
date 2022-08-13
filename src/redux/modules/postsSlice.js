import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  posts: [
    {
      id: 1,
      title: 'react',
      body: '안녕하세요',
    },
  ],
};
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
    },
  },
});

export const { addTodo } = postsSlice.actions;

export default postsSlice.reducer;
