import React, { useState, useEffect } from "react";
import { postComments } from "../data/comments.js";
import CommentForm from "./CommentForm.js";
import Comments from "./CommentForm.js";

function Post({ username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);

  return (
    <div className="">
      <img
        className="post_avatar"
        alt="RafehQazi"
        src="http://picsum.photos/50/50" />
      <h3>{username}</h3>

      {/*header->avatar + username*/}
      <img className="post__image" src={imageUrl} alt="" />

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {/*username+caption*/}
      {/* <Comments comments={postComments} /> */}
      <CommentForm />
    </div>
  )
}

export default Post