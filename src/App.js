import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  return <div>App</div>;
};

export default App;
