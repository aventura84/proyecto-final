import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Home from "./Home/Home";
import Post from "./Post";
import { useState,useEffect } from "react";
import SingIn from "./SignIn/SignIn";


function App() {
const classes=useStyles();
const [modalStyle]=useState(getModalStyle);
const[posts,setPosts]=useState([]);
const[open, setOpen]=useState(false);
const[username,setUsername]=useState('');
const[password,setPassword]=useState('');
const[email,setEmail]=useState('');
const[user,setUser]=useState(null);

useEffect(()=>{
  const unsubscribe = AuthenticatorAssertionResponse.onAuthStateChanged((authUser)=>{
    if(authUser){
    console.log(authUser);
    //user has logged in....
    console.log(authUser);
    setUser (authUser);

    if(authUser.displayName){
  //dont update username
    }else{
      //if we just created someone
return authUser.updateProfile({
  displayName:username,
});
}
  }else{
    //user has logged out...
    setUser(null);
  }
  });
  return()=>{
  //perform some cleanup actions
  unsubscribe();
  } 
},[user,username]);


useEffect(()=>{
  //this is where the code runs
db.collection('posts').onSnapshot(snapshot=>{
setPosts(snapshot.docs.map(doc=>({
  id:doc.id,
  post:doc.data()
})));
})
},[]);

const signUp =(event)=>{
event.preventDefault();

aur
  return (
      <div className="app">
      <Modal
      open={open}
      onClose={()=>setOpen (false)}
      >
      <div style={modalStyle}className={classes.paper}>
            <form className="app_signup"
            <center>
              <img
        className="app__headerImage"
        src="https//www.instagram.com/static/images/web/"
        alt=""
      />
      </center>
      <Input
      type="text"
      placeholder="username"
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
>
<Input
      placeholder="email"
      type="text"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
>
<Input
      placeholder="password"
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
></center>
      </div>
      </Modal>
className="app__headerImage"
      <div className="app_posts">
      {
  posts.map(({id,post})=>(
    <Post key={id} username={post.username}caption={post.caption} imageUrl={}/>
  ))
}
</div>
<Instagramembed
url=
maxWidth
hideCaption=
containerTagName=
protocol=
Injectscripr=
onLoading=
onSucess=
onAfterRender=
onFailure=
></Instagramembed>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin"element={<Signin/>}/>
      </Routes>
      <Footer />


      <Post username="cleverqazi"caption="wow it works " imageUrl=""/>
      <Post username="sssangha"caption="DOPE "image=/>
      <Post username="amanath"caption="this is a fun project"/>
      {/*Posts */}
      {/*Posts */}
      {user?.displayName ?(
    
    <ImageUpload username= (user.displayName)/>
    ):(
      <h3>Sorry you need to upload</h3>
    )}
    </main>
  );
}

export default App;
