import React, { useState, useEffect } from "react";
import { postComments } from "../data/comments.js";
import CommentForm from "./CommentForm.js";
import Comments from "./CommentForm.js";
import {AuthContext} from"../context/AuthContext";
function Post({ username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const {user}=useContext(AuthContext);
  const{error,setError}=useState("");

  const deletePost = async (id)=>{
try{
await deletePostService ({id,token});
}catch(error){
  setError(error.message);
}
  };

  
  const data = await loadClonService();


  return (
    <div className="">
      <img
        className="post_avatar"
        alt="RafehQazi"
        src="http://picsum.photos/50/50" />
      <h3>{username}</h3>

      {/*header->avatar + username*/}
      <img className="post__image" src={'${process.env.REACT_APP_BACKEND}/uploads/${post.image}'
      alt ={Post.test} 
      />
      :null

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {/*username+caption*/}
      {/* <Comments comments={postComments} /> */}
      <CommentForm />
      <p>
        by {Post.name} on {new Date(Post.created.at).tolocalString()}
      </p>
      {user&& user.id === postComments.user.id?(
        <section>
          button onClick={()=>deletePost(post.id)}>Delete Post</button
          {error?<p>{error}</p>:null}
        </section>
      )}
    </div>
  )
}

export default Post