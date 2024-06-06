import { sql } from "@vercel/postgres";

export default async function Explore() {
  const { rows: posts } = await sql`SELECT * FROM posts ORDER BY id DESC`;

  return (
    <div>
      <h1>Explore Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          {post.image_url && (
            <img
              src={post.image_url}
              alt={post.title}
              style={{ maxWidth: "100%" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
