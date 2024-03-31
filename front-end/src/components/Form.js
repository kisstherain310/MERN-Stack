import React, { useContext, useState } from 'react';
import '../css/Form.css'
import AppContext from './AppContext';
import axios from 'axios';

export default function Form(){
  const {state, dispatch} = useContext(AppContext);
  const {user} = state;
  const [postInput, setPostInput] = useState({content: ""});
  const onsubmitHandle = async (e) => {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const options = {
        method: 'post',
        url: 'api/v1/posts',
        data: postInput,
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      const response = await axios(options);
      const post = response.data.data.post;
      const author = { _id: post.author, name: user.userName};
      dispatch({
        type: "CREATE_ONE_POST",
        payload: {...post, author: author, isEditable: true}
      });
      setPostInput({content: ""});
    } catch (error) {
      console.log(error);
    }
  } 
  return (
    <section className="form-section">
      <form className="form" onSubmit={onsubmitHandle}>
        <textarea type="text" name="content" id="content" className="content" placeholder="Whats happening?"
        value={postInput.content}
        onChange={(e) => setPostInput({content: e.target.value})}
        />
        <button className="btn" type="submit">Tweet</button>
      </form>
    </section>
  )
} 