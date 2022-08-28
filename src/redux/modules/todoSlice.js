import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  todos: [],
};

export const getTodosThunk = createAsyncThunk(
  'getTodos',
  async (payload, thunkAPI) => {
    //1. 중간 작업
    const data = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_page=1'
    );
    console.log(thunkAPi.getState());
    console.log(data.data);
    //2. dispatch (원래 하려고 했던 디스패치)

    //3. 스토어에 넣어야함
  }
);

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export const {} = todosSlice.actions;

export default todosSlice.reducer;
