import { AuthContext } from "../providers/AuthProvider";
// import usePosts from "../hooks/usePosts";
import { useContext } from "react";

function HomeScreen() {
  // const { posts, loading, error, addPost } = usePosts();
  const user = useContext(AuthContext) ?? {};
  const { email, id, login } = user;

  // if (loading) return <p>loading posts</p>;
  // if (error) return <ErrorMessage message={error} />;

  // console.log(posts, loading, error);
  return (
    <div>
      <h1>Latest Posts</h1>
      {/* <Postlist posts={posts} />
      <Stories />
      <Posts /> */}
      <button
        onClick={() => {
          login("test1@creatinium.com", "password");
        }}
      >
        Login
      </button>
      <span>{email ?? "No hay email"}</span>
      <span>{id ?? "No hay email"}</span>
      {/* {user ? <NewPost addPost={addPost} /> : null} */}
    </div>
  );
}

export default HomeScreen;
