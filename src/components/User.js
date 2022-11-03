import useUserPosts from "../hooks/useUserPosts";
import { Postlist } from "./Postlist";

function UserPosts({ id }) {
  const { posts } = useUserPosts(id);

  return (
    <section>
      <h2>Posts</h2>
      <Postlist posts={posts} />
    </section>
  );
}

export default UserPosts;
