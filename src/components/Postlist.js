export const Postlist = ({ posts }) => {
  return posts.length ? (
    <ul> 
        {posts.map(tweet=>
        <li key={posts.id}>Post post={posts}/>
        </li>
        </ul>
  ) : (
    <p>There are not posts yet...</p>
  );
};
