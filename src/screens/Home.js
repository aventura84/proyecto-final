import Posts from "../components/Posts";
import { Postlist } from "../components/Postlist";
import { AuthContext } from "../context/AuthContext";
import Stories from "../components/Stories";

function HomeScreen() {
  const { posts, loading, error } = Posts();

  if (loading) return <p>loading posts</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(posts);
  return (
    <div>
      <Postlist posts={posts} />
      <Stories />
      <Posts />
      {user ? <p>aquí formulario de envío de post</p> : null}
    </div>
  );
}

export default HomeScreen;
