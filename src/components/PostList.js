import React from 'react';
import { Link } from 'react-router-dom';

export default ({ posts }) => {
  const postLinks = posts.links.rows.map((post) => {
    return(
      <li className="post-links" key={post.id}>
        <Link to={`/blog_posts/${post.id}`}>
          {post.title}
        </Link>
      </li>
    ) 
  })
  return <ul>{postLinks}</ul>
}