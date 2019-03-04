import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {
  const request = axios.get('localhost:8080/api/v1/blog_posts/');

  return {
    type: FETCH_POSTS,
    payload: request
  }
}