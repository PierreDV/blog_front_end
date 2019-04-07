import React from 'react';
import { Link } from 'react-router-dom';

export default ({ posts }) => {
  if(posts.links.length === 0) {
    return <div>No posts Available</div>
  }
  const postLinks = posts.links.map((post) => {
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