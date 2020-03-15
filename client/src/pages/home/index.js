import React, { useEffect, useState } from 'react';
import './style.css';
import * as axios from 'axios';
import PostCard from '../../components/post-card';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPostAsync = async () => {
    try {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPosts(result.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getPostAsync();
  }, []);

  return (
    <div className="Home">
      <div className="container">
        {posts.map((post, index) => (
          <PostCard {...post} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
