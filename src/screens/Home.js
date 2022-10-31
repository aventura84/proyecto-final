import Posts from "../components/Posts";
import { Postlist } from "../components/Postlist";
import { AuthContext } from "../context/AuthContext";
import Stories from "../components/Stories";
import usePosts from "../hooks/usePosts";
import { Auth } from "../components/Auth";

function HomeScreen =()=> {
  const { posts, loading, error,addPost} = usePosts();
const {user} = useContext(AuthContext);
  
if (loading) return <p>loading posts</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(posts, loading, error);
  return (
    <div>
<h1>Latest Posts</h1>
      <Postlist posts={posts} />  
      <Stories />
      <Posts />
      {user ? <Newpost addPost={addPost}> : null}
      <i class="material-icons">thumb_down</i>
      <i class="material-icons">thumb_up</i>
    </div>
  );
;}

export default HomeScreen;
