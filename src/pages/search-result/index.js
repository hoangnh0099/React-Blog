import React, { useEffect, useState } from 'react';
import './style.css';
import * as axios from 'axios';
import PostCard from '../../components/post-card';
import queryString from 'query-string';

export type Props = {
  location: Object,
};

const SearchResult = (props: Props) => {
  const { location } = props;
  const [posts, setPosts] = useState([]);

  const query = queryString.parse(location.search);

  const getPostAsync = async () => {
    try {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPosts(
        result.data.filter(item =>
          item.title.toLowerCase().includes(query.keyword.toLowerCase()),
        ),
      );
    } catch (e) {
      console.error(e.message);
    }
  };

  const renderPosts = () => {
    if (!posts.length) {
      return <h1>No result</h1>;
    } else {
      return posts.map((post, index) => (
        <PostCard {...post} key={index} index={index} />
      ));
    }
  };

  useEffect(() => {
    getPostAsync();
  }, []);

  return <div className="Home">{renderPosts()}</div>;
};

export default SearchResult;
