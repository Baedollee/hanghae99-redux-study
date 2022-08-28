import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addTodo } from './redux/modules/postsSlice';
import { addNumber, minusNumber } from './redux/modules/counterSlice';
import { getTodosThunk } from './redux/modules/todoSlice';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const number = useSelector((state) => state.counter.number);

  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  useEffect(() => {
    dispatch(getTodosThunk());
  }, []);

  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(post));
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setPost({
      id: posts.length + 1,
      ...post,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="title" onChange={onChangeHandler} />
        <input type="text" name="body" onChange={onChangeHandler} />
        <button>추가하기</button>
      </form>

      <div>
        <div>{number}</div>
        <button
          onClick={() => {
            dispatch(addNumber());
          }}>
          더하기
        </button>
        <button
          onClick={() => {
            dispatch(minusNumber());
          }}>
          마이너스
        </button>
      </div>
    </div>
  );
};

export default App;
