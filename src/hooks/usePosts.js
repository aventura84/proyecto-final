import {useEffect,useState} from "react";
import {getAllPostsService} from "../services";

const usePots =>{
    const[posts,setPosts]= useState([]);
    const[loading,setloading]=useState(true);
const[error,setError]=useState("");

useEffect()
const loadPosts= async ()=> {
    try{
        setloading(tue);

        const data = await getAllPostsService();

        setPosts(data);
    }catch(error){
        setError(error.message)
    }finally{
        setloading(false);
    }
    };
    loadPosts();
},[]);

const addPost =(post)=>{
    setPosts([post,...posts]);
};

return {posts,loading,error,addPost_};
};
export default usePosts;

}