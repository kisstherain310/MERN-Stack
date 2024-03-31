import React, { useContext, useState } from 'react';
import '../css/Header.css'
import axios from 'axios';
import AppContext from './AppContext';

export default function PostItem({post}){
  let date = post.createdAt;
  const {dispatch} = useContext(AppContext);
  const [contentEditPost, setContentEditPost] = useState(post.content);
  const [editForm, setEditForm] = useState(false);
  const [deleteComfirm, setDeleteConfirm] = useState(false);

  const onUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const options = {
        method: 'put',
        url: `/api/v1/posts/${post._id}`,
        data: {content: contentEditPost},
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
      await axios(options);
      dispatch({type: "UPDATE_ONE_POST", payload: post});
      post.content = contentEditPost
      setEditForm(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      const options = {
        method: 'delete',
        url: `/api/v1/posts/${post._id}`,
        headers: {
          Authorization: `Bearer ${token}`
        } 
      }
      await axios(options);
      dispatch({type: "DELETE_ONE_POST", payload: {_id: post.id}});
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="post-item">
      <p className="post-content">
        {post.content}
      </p>
      <div className="post-footer">
        <div className="post-infors">
          <span>by {post.author.name}</span>
          <span>Date: {`${date.slice(8,10)}/${date.slice(5,7)}/${date.slice(0,4)}`}</span>
        </div>
        {post.isEditable && 
          <>
          <div className="post-edit-delete">  
            {(!deleteComfirm && !editForm) && 
             <>
              <span onClick={() => setEditForm(true)}>Edit</span>
              <span onClick={() => setDeleteConfirm(true)}>Delete</span>
             </>
            }
            {deleteComfirm && (
              <>
                <span className="delete-question">Are you sure?</span>
                <span onClick={onDelete}>Yes</span>
                <span onClick={() => setDeleteConfirm(false)}>No</span>
              </>
            )}
          </div>
          </>
        }
      </div>
      {editForm && (
        <>
          <div className="post-edit-form">
            <form className="edit-form">
              <textarea type="text" name="content" id="content" className="content" placeholder="Whats happening?"
              onChange={(e) => setContentEditPost(e.target.value)}
              >
                {contentEditPost}
              </textarea>
              <div className="btn-container">
                <button className="btn" type="button" onClick={onUpdate}>Update</button>
                <button className="btn" type="button" onClick={() => setEditForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
} 