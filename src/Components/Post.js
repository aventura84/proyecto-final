import React, { useState,useEffect } from "react";
import "./Post.css";
//import{} from Post
//import Avatar from "@material-ui/core/Avatar";
//function Post({ username, caption, imageUrl }) {
//const [comments,setComments]= useState ([]);
//useEffect(()=>{
// let unsubcribe;
//  if(postId){
//unsubcribe=
//.collection("posts")
//.doc(postId)
//.collection("comments")
//.orderBy('timestamp','desc')
//.onSnapshot((snapshot)=>{
//setComments(snapshot.docs.map((doc)))
//});

 // }
  
  //return()=>{
   // unsubcribe ();

//};
//},[postId]);

//const postComments = (event)=>{
//event.preventDefault();
//}

//  return (
//    <div className="post">''
 //     <div className="post__header">
//        </div>
 //       <Avatar
  //        className="post_avatar"
  //        alt="RafehQazi"
//          src="static/images/avatar/1.jpg"
 //      <h3>{username}</h3>

//   {/*header->avatar + username*/}
//      <img className="post__image" src={imageUrl} alt="" />

 //     <h4 className="post__text">
  //      <strong>{username}</strong> {caption}
 //     </h4>
//     {/*username+caption*/}
//<div className="post__comments">
//{postComments.map((commments)=>(
 // <p>
//    <strong>{comment.username}</strong>{comment.text}
 // </p>
//) )}
//</div>
//      <form className="post__commentBox">
//       <input
//        className="post__input"
//       type="text"
//        placeholder="Add a comment..."
//       value={comment}
 //       onChange={(e)=>setComment(e.target.value)}
//       />
//        <buttton
//        className="post__button"
//disabled={!comment}
//type="submit"
//onClick={postComment}
//>
//Post
//</buttton>
//</form>
//      )
//   </div>
// )
//}

//export default Post;
//