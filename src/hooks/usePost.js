import { useEffect, useState } from "react";
import { getSinglePostService } from "../index2";

const usePosts = () => {
  const [posts, setPots] = useState(null);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const removePost = (id) => {};

useEffect(()=>
const loadPost= async ()=>{
  try{
    setLoading(true);

    const data = await getSinglePostService(id);
    
    setPots(data);

  }catch(error){
    setError(error.message);

  }finally{
    setLoading(false);
  }
}

loadPost();
},[id])

return { posts, loading, error, addPost };
};

export default usePost;
