import { useEffect, useState } from "react";
import services from "../services";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setloading(true);

        const data = await services.posts.getPosts();

        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setloading(false);
      }
    };
    loadPosts();
  }, []);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return { posts, loading, error, addPost };
};
export default usePosts;
