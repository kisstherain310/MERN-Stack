import React, { useState } from 'react';
import '../css/Header.css'

export default function PostItem({post}){
  let date = post.createdAt;
  const [editForm, setEditForm] = useState(false);
  const [deleteComfirm, setDeleteConfirm] = useState(false);
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
                <span>Yes</span>
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
              <textarea type="text" name="content" id="content" className="content" placeholder="Whats happening?">
                {post.content}
              </textarea>
              <div className="btn-container">
                <button className="btn" type="button">Update</button>
                <button className="btn" type="button" onClick={() => setEditForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
} 