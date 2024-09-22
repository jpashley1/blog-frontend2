export function PostsIndex({ posts }) {
  return (
    <div id="PostsIndex">
      <h1>All Posts</h1>
       {posts.map((post) => (
         <div key={post.id}>
           <h2>{post.name}</h2>
           <img src={post.image} />
         </div>
       ))}
    </div>
  );
}