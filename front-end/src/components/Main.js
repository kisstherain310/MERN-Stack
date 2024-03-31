import React, { useContext } from 'react';
import Form from './Form';
import PostList from './PostList';
import AppContext from './AppContext';

export default function Main(){
  const {state} = useContext(AppContext);
  const {user} = state;
  return (
    <div>
      {user && <Form />}
      <PostList />
    </div>
  )
} 