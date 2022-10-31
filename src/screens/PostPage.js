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
      <h1>User {user.email}</h1>
      <section class="user-data">
        <p>User id: {user.id}</p>
        <p>Registered on {new Date(user.created_at).toLocaleString()}</p>
      </section>
      <UserPosts id={user.id} />
    </section>
  );
};
