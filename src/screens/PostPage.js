import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/errorMessage";
import usePost from "../hooks/usePost";

export const Postpage = () => {
  const { id } = useParams;

  const { post, loading, error } = usePost(id);

  if (loading) return <p>cargando post...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Post from {post.email}</h1>
      <Post post={post} />
    </section>
  );
};
