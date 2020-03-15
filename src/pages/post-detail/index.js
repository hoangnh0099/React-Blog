import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
import './style.css';

const PostDetail = props => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const [post, setPost] = useState({});

  const getPostDetailAsync = async () => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      setPost(result.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getPostDetailAsync();
  }, []);

  return (
    <div className="PostDetail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
