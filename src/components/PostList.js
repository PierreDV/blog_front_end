import React from 'react';

export const PostList = (props) => {
  const postLinks = props.posts.items.rows.map((post) => {
    return <li key={post.id}>{post.title}</li>
  })
  return <ul>{postLinks}</ul>
}