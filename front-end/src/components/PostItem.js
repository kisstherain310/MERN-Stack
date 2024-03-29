import React from 'react';
import '../css/Header.css'

export default function PostItem(){
  return (
    <div className="post-item">
      <p className="post-content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam exercitationem quis fugit, reprehenderit nisi culpa nulla odio, voluptas quisquam unde laborum. Cum dolore iste voluptates, fugiat quisquam quas dolorum tempore.
      </p>
      <div className="post-footer">
        <div className="post-infors">
          <span>by TienTran</span>
          <span>Date: 28/03/2023</span>
        </div>
        <div className="post-edit-delete">
          <span>Edit</span>
          <span>Delete</span>
          <span className="delete-question">Are you sure?</span>
          <span>Yes</span>
          <span>No</span>
        </div>
      </div>
      <div className="post-edit-form">
        <form className="edit-form">
          <textarea type="text" name="content" id="content" className="content" placeholder="Whats happening?">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maxime consequatur inventore recusandae sequi doloribus voluptates aspernatur, eaque excepturi suscipit? Itaque explicabo quidem quam rem ad neque suscipit. Ducimus, natus?
          </textarea>
          <div className="btn-container">
            <button className="btn" type="button">Update</button>
            <button className="btn" type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
} 