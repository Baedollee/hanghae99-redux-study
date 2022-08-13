import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo } from './redux/modules/postsSlice';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  console.log(post);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(post));
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setPost({ ...post, [name]: value });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="title" onChange={onChangeHandler} />
        <input type="text" name="body" onChange={onChangeHandler} />
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default App;
